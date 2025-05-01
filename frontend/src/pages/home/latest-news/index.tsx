"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function LatestNewsUi() {

  return (
    <div className="min-h-screen bg-[#E7EAFD] py-10 px-4">
      <div className="w-full mx-auto flex flex-col xl:flex-row gap-6">

        {/* Left Content */}
        <div className="w-full space-y-8">

          {/* Headlines */}
          <div>
            <h2 className="text-xl font-bold mb-3">Today's Headlines</h2>
            <Card className="flex flex-col shadow-md">
              <img src="/latest-news-dummy.svg" alt="Career Fair" className="w-full object-cover p-2" />
              <div className="p-4 flex flex-col justify-between">
                <h3 className="font-semibold text-lg">
                  Student Career Fair Review: Opportunities meet Ambition.
                </h3>
                <div className="mt-4 flex justify-between">
                  <p className="text-md text-gray-600">by Student Council</p>
                  <Button className="bg-[#2B366F] rounded-3xl w-[147px]">Read</Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Blogs */}
          <div>
            <h2 className="text-xl font-bold mb-3">Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="bg-white rounded-xl shadow-md w-full">
                  <img src="/shawarma.svg" alt="Shawarma" className="w-full object-cover p-2" />
                  <div className="p-4 space-y-2">
                    <p className="font-medium">How to make shawarma</p>
                    <p className="text-sm text-gray-500">by Cooking_with_Sayo</p>
                    <div className="flex justify-end">
                      <Button className="bg-[#2B366F] rounded-3xl w-[147px]">Read</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* Sports News */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Sports</h3>
              <span className="text-sm text-blue-600 cursor-pointer underline">see all</span>
            </div>
            <div className="bg-white p-8 rounded-xl shadow">
              <div className="flex flex-row justify-between ">
                <div className="justify-items-center">
                  <img className="w-12 h-12" src="/basketball-jersey-1.svg" alt="" />
                  <p className="text-center my-2 text-lg font-bold">Bluejay </p>
                </div>
                <div>
                  <p className="text-center my-2 text-lg font-bold">VS</p>
                  <p className="text-center my-2 text-sm font-medium">11-04-2024</p>
                  <p className="text-center my-2 text-sm font-medium">4pm</p>
                </div>
                <div className="justify-items-center">
                  <img className="w-12 h-12" src="/basketball-jersey-2.svg" alt="" />
                  <p className="text-center my-2 text-lg font-bold">Cirok</p>
                </div>
              </div>

            </div>
          </div>

          {/* Club News */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Club News</h3>
              <span className="text-sm text-blue-600 cursor-pointer underline">see all</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow space-y-4 text-sm">
              {[
                {
                  title: "Euphoria Club",
                  content: "Hey guys!! If you want to join PAU's dance club – Euphoria – you still can! We’re currently onboarding new members who are passionate about dance, movement, and expression. Whether you’re a beginner or a pro, there’s a space for you on our team. Weekly rehearsals are held at the Main Auditorium every Wednesday and Saturday. Come vibe, connect, and express yourself with like-minded dancers!"
                },
                {
                  title: "TIC Club",
                  content: "This is to inform you that Interswitch is currently in Jos for a tech outreach. It's a great opportunity to interact with industry leaders and get firsthand insights into the tech space. TIC Club members who are interested in fintech and innovation are highly encouraged to engage. There will be workshops, Q&A sessions, and possibly internship opportunities. Stay tuned to our WhatsApp group for updates on logistics and participation."
                },
                {
                  title: "Art Club",
                  content: "Welcome back, creatives! While we can't send you home food, we can definitely serve you a plate of artistic inspiration. The Art Club is kicking off this semester with exciting projects and exhibitions. We're exploring digital art, portrait sketching, and a collaborative mural on campus. If you have a love for color, creativity, and self-expression, this is your sign to join us. Meetings hold every Friday at the Art Studio near the cafeteria."
                },
                {
                  title: "Literary & Debating Society",
                  content: "Calling all wordsmiths, poets, and passionate speakers! The Literary and Debating Society is recruiting new members who are ready to take the stage. We'll be hosting open mic nights, inter-school debates, and workshops on public speaking. Improve your confidence, articulation, and critical thinking in a vibrant community. Reach out to our Instagram handle or stop by Room 104 in the Humanities Block to get started."
                },
                {
                  title: "Music Society",
                  content: "Got a voice that melts hearts or fingers that strum magic? The Music Society is your home! We welcome singers, instrumentalists, and producers to be a part of our jam sessions and campus performances. Rehearsals begin next week and we’re prepping for an acoustic night under the stars. It’s not just music – it’s family, harmony, and rhythm. Join us and let the music speak for you."
                }
              ].map((news, index) => (
                <div key={index}>
                  <p className="font-bold">{news.title}</p>
                  <p>{news.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

