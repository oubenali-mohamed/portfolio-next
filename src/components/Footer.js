import Link from 'next/link'
import logo from '../../public/assets/logo.png'
import logoLinkedin from '../../public/assets/linkedin.png'
import logoGithub from '../../public/assets/github.png'
import logoEmail from '../../public/assets/email.png'
import Image from 'next/image'
export default function Footer() {
  let lienLinkedin = 'https://www.linkedin.com/in/mohamed-oubenali'
  let lienGithub = 'https://github.com/oubenali-mohamed'
  let lienEmail = 'mailto:oubenali15@gmail.com'

  const currentYear = new Date().getFullYear()
  
  return (
    <div className="bg-black border-t border-gray-100">
      <div className="flex flex-row justify-between">
        <Link href="/">
          <Image
            className="w-24 h-24 ml-10"
            src={logo}
            alt="logo de mon protfolio"
            width={56}
            height={56}
            priority
          />
        </Link>
        <div className="pr-4 mt-8 flex flex-row justify-between">
          <Link href={lienLinkedin} target="_blank">
            <Image
              className=" w-8 h-8 mr-4"
              src={logoLinkedin}
              alt="logo linkedin"
              width={56}
              height={56}
              priority
            />
          </Link>
          <Link href={lienGithub} target="_blank">
            <Image
              className=" w-8 h-8 mr-4"
              src={logoGithub}
              alt="logo de mon repository github"
              width={56}
              height={56}
              priority
            />
          </Link>
          <Link href={lienEmail}>
            <Image
              className=" w-8 h-8 mr-4"
              src={logoEmail}
              alt="logo de mon email"
              width={56}
              height={56}
              priority
            />
          </Link>
        </div>
      </div>
      <p className=" text-white text-center pb-4">
        © {currentYear} O.M All rights reserved
      </p>
    </div>
  )
}
