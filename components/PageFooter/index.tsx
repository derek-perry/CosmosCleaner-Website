import Image from 'next/image'
import LinkInternal from "../Links/LinkInternal"
import LinkExternal from "../Links/LinkExternal"

const PageFooter = (): JSX.Element => {
  return (
      <footer className="mt-9 w-full flex flex-col items-center justify-center border-t">
        <div
          className="flex items-center justify-center mt-[40px] mb-[15px]"
        >
          <LinkInternal href="privacy" title="Cosmos Cleaner Privacy Policy" className="no-underline"><p>Privacy Policy</p></LinkInternal><p className="pr-2 pl-2"> - </p><LinkInternal href="copyright" title="Cosmos Cleaner Copyright/Licenses" className="no-underline"><p>Copyright/Licenses</p></LinkInternal>
        </div>
        <div
          className="flex items-center justify-center mt-[20px] mb-[20px]"
        >
          <LinkInternal href="" title="Cosmos Cleaner" className="no-underline"><p>Cosmos Cleaner</p></LinkInternal><p className="pr-2 pl-2"> - </p><LinkExternal href="https://dp.design" title="Derek Perry" className="no-underline"><p>Derek Perry</p></LinkExternal>
          <Image className="pl-2" src={process.env.NEXT_PUBLIC_SITE_URL + '/dp.svg' || './dp.svg'} alt="Derek Perry dp.design Logo" width={50} height={50} />
        </div>
      </footer>
  )
}

export default PageFooter