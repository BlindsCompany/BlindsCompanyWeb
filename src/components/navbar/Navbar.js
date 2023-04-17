import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from '../util/Link';
import WhatsappIcon from '../icons/WhatsappIcon';
import FacebookIcon from '../icons/FacebookIcon';
import YoutubeIcon from '../icons/YoutubeIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import InstagramIcon from '../icons/InstagramIcon';

const Navbar = () => {
    const data = useStaticQuery(graphql`
        query {
            file(name: { eq: "blinds-logo" }) {
                childImageSharp {
                    gatsbyImageData(width: 120, height: 120, placeholder: NONE)
                }
            }
            globalJson {
                navigation {
                    name
                    url
                }
                contact {
                    social {
                        facebook
                        instagram
                        linkedin
                        youtube
                    }
                    phone {
                        whatsapp
                        whatsappLink
                    }
                }
            }
        }
    `);

    const [isNavbarExpanded, setNavbarExpanded] = React.useState(false);
    const expandableAreaRef = React.useRef();
    const navigation = data.globalJson.navigation;

    const socialIcons = [
        {
            icon: <WhatsappIcon />,
            url: data.globalJson.contact.phone.whatsappLink,
        },
        {
            icon: <InstagramIcon />,
            url: data.globalJson.contact.social.instagram,
        },
        {
            icon: <FacebookIcon />,
            url: data.globalJson.contact.social.facebook,
        },
        {
            icon: <YoutubeIcon />,
            url: data.globalJson.contact.social.youtube,
        },
        {
            icon: <LinkedinIcon />,
            url: data.globalJson.contact.social.linkedin,
        },
    ];

    return (
        <header className={`sticky top-0 bg-white border-b z-50 h-[85px]`}>
            <div className="container relative flex items-center justify-between h-full">
                <Link to="/" aria-label="Blinds Company">
                    <GatsbyImage
                        image={data.file.childImageSharp.gatsbyImageData}
                        alt="Blinds Company Logo"
                        className="!absolute top-0 left-0 w-20 h-full"
                        imgClassName="object-fill"
                    />
                </Link>
                <button
                    class={`block lg:hidden hamburger hamburger--squeeze ${
                        isNavbarExpanded && 'is-active'
                    }`}
                    type="button"
                    onClick={() => setNavbarExpanded((prev) => !prev)}
                >
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
                <div
                    className={`${
                        isNavbarExpanded && 'border-b'
                    } lg:border-0 lg:pb-0 items-center justify-between flex-1 lg:flex absolute lg:relative bg-white top-full lg:mt-0 w-full container overflow-hidden lg:overflow-visible lg:top-0`}
                    style={{
                        transition: 'max-height 350ms',
                        maxHeight: isNavbarExpanded
                            ? `${expandableAreaRef.current.scrollHeight}px`
                            : '0px',
                    }}
                    ref={expandableAreaRef}
                >
                    <nav
                        aria-label="Navegación principal"
                        className="my-6 lg:-translate-x-1/2 lg:absolute lg:left-1/2 -top-1 lg:top-0 lg:my-0 lg:px-0 lg:w-full lg:-translate-y-1/2"
                    >
                        <ul className="flex flex-col justify-center text-sm uppercase lg:gap-4 lg:flex-row">
                            {navigation.map((nav, i) => {
                                return (
                                    <li key={i} className="py-2 border-b lg:py-0 lg:border-b-0">
                                        <Link
                                            to={nav.url}
                                            activeClassName="lg:before:scale-x-100 active"
                                            className="inline-block text-center animated-underline"
                                            partiallyActive={nav.url !== '/'}
                                        >
                                            {nav.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <nav className="pb-2 pr-4 lg:pb-0 lg:ml-auto header-social-icons ">
                        <span className="lg:hidden inline-block mb-3 relative border-b-[1px] border-primary-500">
                            Conócenos en las redes sociales
                        </span>
                        <ul className="relative z-20 flex gap-4 text-primary-500">
                            {socialIcons.map((social, i) => {
                                return (
                                    <li key={i}>
                                        <a href={social.url} target="__blank">
                                            {social.icon}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
