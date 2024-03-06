import Image from "next/image";
import dynamic from "next/dynamic"

const RemoteAppMFE = dynamic(() => import("remoteApp/RemoteAppComponent"), {
  ssr: true,
  loading: <p>Loading......</p>
})

export default function Home() {
  return (
    <>
      <div>Host App</div>
      <RemoteAppMFE />
    </>
  );
}
