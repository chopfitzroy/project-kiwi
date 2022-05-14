import Link from "next/link";

import { useNavbar } from "./useNavbar";

import {
  PullRequests,
  Right,
  Left,
  Edit,
  Star,
  Info,
  Bug,
} from "@icon-park/react";

type NavbarSignature = () => JSX.Element;
const Navbar: NavbarSignature = () => {
  const { expanded, toggleExpanded } = useNavbar();
  return (
    <nav className={`${expanded ? "w-64" : "w-14"} h-screen border-r`}>
      <ul>
        <li>
          <button
            onClick={toggleExpanded}
            className="w-full flex items-center justify-between p-4 border-b"
          >
            {expanded && <div className="text-slate-700">Minimise</div>}
            {expanded ? (
              <Left size={22} className="text-slate-700" />
            ) : (
              <Right size={22} className="text-slate-700" />
            )}
          </button>
        </li>
        <li>
          <Link href="/">
            <a
              className="flex items-center justify-between p-4 border-b"
              href=""
            >
              {expanded && <div className="text-slate-700">Edit</div>}
              <Edit size={22} className="text-slate-700" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/editor-tutorial">
            <a className="flex items-center justify-between p-4 border-b">
              {expanded && (
                <div className="text-slate-700">Editor Tutorial</div>
              )}
              <Info size={22} className="text-slate-700" />
            </a>
          </Link>
        </li>
        <li>
          <a
            className="flex items-center justify-between p-4 border-b"
            href="https://github.com/chopfitzroy/project-kiwi/issues/new/choose"
            target="_blank"
          >
            {expanded && <div className="text-slate-700">Submit Build</div>}
            <PullRequests size={22} className="text-slate-700" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center justify-between p-4 border-b"
            href="https://github.com/chopfitzroy/project-kiwi/issues/new/choose"
            target="_blank"
          >
            {expanded && <div className="text-slate-700">Request Feature</div>}
            <Star size={22} className="text-slate-700" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center justify-between p-4 border-b"
            href="https://github.com/chopfitzroy/project-kiwi/issues/new/choose"
            target="_blank"
          >
            {expanded && <div className="text-slate-700">Report Bug</div>}
            <Bug size={22} className="text-slate-700" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
