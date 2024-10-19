"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


function App() {
  const API_KEY = '0911245c208546678c463c6f1271d4aa'

  const [news, setNews] = useState([])
  const [category, setCategory] = useState('general')

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)
      const data = await response.json()
      setNews(data.articles)
    }

    fetchNews()
  }, [category])

  return (
    <>
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Noticias Destacadas</h1>
      
      <Select onValueChange={setCategory} defaultValue={category}>
        <SelectTrigger className="w-[180px] mb-4">
          <SelectValue placeholder="Selecciona una categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="general">General</SelectItem>
          <SelectItem value="business">Negocios</SelectItem>
          <SelectItem value="technology">Tecnología</SelectItem>
          <SelectItem value="science">Ciencia</SelectItem>
        </SelectContent>
      </Select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        { news.map((article, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.author}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {article.urlToImage && (
                <div className="w-full h-48 mb-4 overflow-hidden">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-md"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Image+Not+Available'
                    }}
                  />
                </div>
              )}
              <p className="text-sm">{article.description}</p>
            </CardContent>
            <CardFooter>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Leer más
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
