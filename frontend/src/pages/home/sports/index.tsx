"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function SportNewsUi() {
    const [newsData, setNewsData] = useState<any[]>([])
    const [category, setCategory] = useState("general")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    // api url
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const storedCategory = localStorage.getItem("category")
        const cat = storedCategory || "general"
        setCategory(cat)

        async function fetchNews() {
            try {
                setLoading(true)
                setError(null)
                const token = localStorage.getItem("accessToken")
                const res = await fetch(`${API_URL}/api/news-update/${cat}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${token}`,
                    },
                })

                console.log("Response status:", res.status)

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }

                const data = await res.json()
                console.log("API response data:", data) // Debugging

                // Handle different possible response structures
                if (Array.isArray(data)) {
                    setNewsData(data)
                } else if (data.articles) {
                    setNewsData(data.articles)
                } else if (data.data) {
                    setNewsData(data.data)
                } else {
                    setNewsData([])
                }
            } catch (error) {
                console.error("Failed to fetch news:", error)
                setError("Failed to load news. Please try again later.")
                setNewsData([])
            } finally {
                setLoading(false)
            }
        }

        fetchNews()
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen bg-[#E7EAFD] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2B366F] mx-auto"></div>
                    <p className="mt-4 text-[#2B366F]">Loading news...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#E7EAFD] flex items-center justify-center">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <p className="text-red-500">{error}</p>
                    <Button
                        className="mt-4 bg-[#2B366F]"
                        onClick={() => window.location.reload()}
                    >
                        Retry
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#E7EAFD] px-4 py-6">
            <div className="w-full mx-auto flex flex-col xl:flex-row gap-6">
                {/* Left Content */}
                <div className="w-full space-y-2">
                    <div className="flex xl:flex-row justify-between">
                        <h2 className="text-xl font-bold mb-3">Top Stories in {category}</h2>
                    </div>


                    {newsData.length === 0 ? (
                        <div className="text-gray-500 p-4 text-center bg-white rounded-lg">
                            No news articles found for this category.
                        </div>
                    ) : (
                        newsData.map((item, index) => {
                            // Debug each item
                            console.log(`News item ${index}:`, item)

                            // Determine what to display
                            const displayItems = item.sub_articles?.length > 0 ? item.sub_articles : [item]

                            return (
                                <div key={item.url || index} className="space-y-4">
                                    {displayItems.map((article: any, articleIndex: number) => (
                                        <Card key={article.url || articleIndex} className="p-4 shadow-md rounded-xl">
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <div className="w-full sm:w-40 flex-shrink-0">
                                                    {(article.thumbnail_url || article.image) && (
                                                        <img
                                                            src={article.photo_url}
                                                            alt={article.title}
                                                            className="w-full aspect-[4/3] object-cover rounded-lg"
                                                            onError={(e) => {
                                                                e.currentTarget.src = '/placeholder-news.png'
                                                            }}
                                                        />
                                                    )}
                                                </div>

                                                <div className="flex-1 flex flex-col justify-between">
                                                    <div>
                                                        <h3 className="font-semibold text-base sm:text-lg mb-1 line-clamp-2">
                                                            {article.title || "Untitled Article"}
                                                        </h3>
                                                        <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                                                            {article.description || article.snippet || "No description available"}
                                                        </p>
                                                    </div>

                                                    <div className="text-xs text-gray-500 flex flex-wrap items-center gap-1 mb-2">
                                                        {article.authors?.length > 0 && (
                                                            <>
                                                                <span>By {Array.isArray(article.authors) ? article.authors.join(", ") : article.authors}</span>
                                                                <span>•</span>
                                                            </>
                                                        )}
                                                        {article.source_name && (
                                                            <>
                                                                <span>{article.source_name}</span>
                                                                <span>•</span>
                                                            </>
                                                        )}
                                                        {article.published_datetime_utc && (
                                                            <span>
                                                                {new Date(article.published_datetime_utc).toLocaleDateString('en-US', {
                                                                    month: 'short',
                                                                    day: 'numeric',
                                                                    year: 'numeric'
                                                                })}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <Button
                                                        className="self-start bg-[#2B366F] rounded-3xl text-sm px-4 py-1"
                                                        onClick={() => window.open(article.url || article.link, '_blank')}
                                                    >
                                                        Read
                                                    </Button>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            )
                        })
                    )}
                </div>

                {/* Right Content */}
                {/* <div className="w-full xl:w-1/3 space-y-6">
                    <div className="relative w-full">
                        <Input placeholder="Search" className="pr-10" />
                        <Search className="absolute right-3 top-3 h-5 w-5 text-gray-500" />
                    </div> */}
                {/* More sections can be added here */}
                {/* </div> */}
            </div>
        </div>
    )
}