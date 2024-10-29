import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'



const Documents = () => {
  return (
    <div>
      <Header>
        <div className='flex w-fit justify-center items-center gap-2'>
          <p className='document-title'>Fake Title for now</p>
        </div>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      </Header>
      <Editor/>
    </div>
  )
}

export default Documents