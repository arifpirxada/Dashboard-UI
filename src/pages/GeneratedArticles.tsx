import { useEffect, useState } from "react"
import {
  generatedArticles,
  publishedArticles,
  scheduledArticles,
  archivedArticles,
} from "@/utils/articleData"
import { columns, type Article } from "@/components/articles/columns"
import { DataTable } from "@/components/articles/data-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import SkeletonTable from "@/components/articles/SkeletonTable"

type TabKey = "generated" | "published" | "scheduled" | "archived"

const tabData: Record<TabKey, Article[]> = {
  generated: generatedArticles,
  published: publishedArticles,
  scheduled: scheduledArticles,
  archived: archivedArticles,
}

export default function GeneratedArticles() {
  const [tab, setTab] = useState<TabKey>("generated")
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Article[]>(tabData["generated"])

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      setData(tabData[tab])
      setLoading(false)
    }, 500)

    return () => clearTimeout(timeout)
  }, [tab])

  return (
    <div className="container px-6 py-2">
      <Tabs value={tab} onValueChange={(val) => setTab(val as TabKey)} className="flex flex-col gap-4">
        <TabsList className="self-center flex-wrap">
          <TabsTrigger className="px-4 cursor-pointer" value="generated">Generated Articles</TabsTrigger>
          <TabsTrigger className="px-4 cursor-pointer" value="published">Published Articles</TabsTrigger>
          <TabsTrigger className="px-4 cursor-pointer" value="scheduled">Scheduled Articles</TabsTrigger>
          <TabsTrigger className="px-4 cursor-pointer" value="archived">Archived Articles</TabsTrigger>
        </TabsList>

        <Input placeholder="Search for Title & Keywords..." className="w-fit mb-4 self-center" />

        <TabsContent value={tab}>
          {loading ? (
            <SkeletonTable rows={6} columns={columns.length} />
          ) : (
            <DataTable columns={columns} data={data} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
