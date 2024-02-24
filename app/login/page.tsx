import GithubButton from "@/components/GithubButton"
import GoogleButton from "@/components/GoogleButton"

const page = () => {
  return (
    <div className="grid  items-center justify-center h-screen">

<div className="border border-gray-200 py-4 px-2 rounded-md gap-4 flex flex-col">

    <p className="text-3xl font-bold text-center">Choose A Provider</p>

    <div>
        <GoogleButton />
        <GithubButton />
    </div>

</div>


    </div>
  )
}

export default page