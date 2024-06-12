import Link from "next/link";
import { FaSnapchatGhost } from "react-icons/fa";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa6";

function FollowUsIcons({ gap = "gap-8", size = "text-2xl" }) {
  return (
    <div className={`flex ${gap} ${size}`}>
      <Link href="/">
        <FaInstagram />
      </Link>
      <Link href="/">
        <FaFacebook />
      </Link>
      <Link href="/">
        <FaXTwitter />
      </Link>
      <Link href="/">
        <FaYoutube />
      </Link>
      <Link href="/">
        <FaSnapchatGhost />
      </Link>
      <Link href="/">
        <FaPinterest />
      </Link>
    </div>
  );
}

export default FollowUsIcons;
