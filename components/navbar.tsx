import {
	Link,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	LinkedInIcon,
} from "@/components/icons";

export const Navbar = () => {

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand className="gap-3 max-w-fit">
					<NextLink className="flex items-center justify-start gap-1" href="/">
						<p className="font-bold text-inherit">Codewithashim {"</>"}</p>
					</NextLink>
				</NavbarBrand>
				<div className="justify-start hidden gap-4 ml-2 lg:flex">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</div>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="hidden gap-2 sm:flex">
					<Link isExternal href={siteConfig.links.linkedin}>
						<LinkedInIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.twitter}>
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord}>
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github}>
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="pl-4 sm:hidden basis-1" justify="end">
				<Link isExternal href={siteConfig.links.github}>
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>
		</NextUINavbar>
	);
};
