import Link from 'next/link';
import React from 'react';

const links = [{ href: 'https://github.com/pragmaticivan', label: 'Ivan' }].map(
    link => {
        link.key = `nav-link-${link.href}-${link.label}`;
        return link;
    }
);

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link prefetch href="/">
                    Home
                </Link>
            </li>
            <ul>
                {links.map(({ key, href, label }) => (
                    <li key={key}>
                        <Link href={href}>
                            <a>{label}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </ul>
    </nav>
);

export default Nav;
