import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my AI generated story! A story about Bunnydrums and Bunratty" />
        <p className="description">
          

Once upon a time, in the magical land of music, there was a band called Bunnydrums. They were known for their infectious beats, catchy melodies, and energetic performances. People from all over would flock to their shows, eager to dance and sing along to their tunes.

But Bunnydrums had a secret weapon - the one and only Bunratty. Bunratty was a mischievous, yet talented, bunny who played the drums like no other. With lightning-fast drumming skills and a contagious rhythm, Bunratty brought an extra spark to Bunnydrums' music.

Together, Bunnydrums and Bunratty took the music scene by storm. Their electrifying performances and unique sound made them a favorite among fans and critics alike. They toured the world, spreading joy and groovy vibes wherever they went.

But it wasn't just about the music for Bunnydrums and Bunratty. They believed in using their platform to make a positive impact. They organized charity concerts, donated to various causes, and inspired others to follow their dreams.

The story of Bunnydrums and Bunratty reminds us that music has the power to unite, uplift, and bring joy to people's lives. So, let's crank up the volume, dance like nobody's watching, and celebrate the magical world of music with Bunnydrums and their talented drummer, Bunratty! 🎵🐰🥁 
  
  
  <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
