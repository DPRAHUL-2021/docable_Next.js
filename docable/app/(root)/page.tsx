import AddDocumentBtn from '@/components/AddDocumentBtn'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import React from 'react'

const Home = async () => {
  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in');
  const documents = [];
  return (
    <main className='main-container'>
      <Header className='top-0 left-0 sticky'>
        <div className='flex gap-2 items-center lg:gap-4'>
          Notification
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>
      </Header>

      {documents.length > 0 ? (
      <div>

      </div>
    ) : (
      <div className='document-list-empty'>
        <Image
          src="/assets/icons/doc.svg"
          alt='document'
          width={40}
          height={40}
          className='mx-auto'
        />
        <AddDocumentBtn
          userId={clerkUser.id}
          email={clerkUser.emailAddresses[0].emailAddress}
        />
      </div>  
    )}

    </main>
  )
}

export default Home