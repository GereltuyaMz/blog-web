import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-footer">
			<div className="w-8/12 m-auto">
				<div className="flex justify-between pt-16 pb-6 border-b">
					<div>
						<div className="w-64">
							<h6 className="text-lg font-semibold">About</h6>
							<p className="text-base text-primary font-normal mt-3 mb-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam
							</p>
						</div>
						<p>Email: info@jstemplate.net</p>
						<p>Phone: 880 123 456 789</p>
					</div>
					<ul>
						<Link href="/">
							<li className="menu-item">Home</li>
						</Link>
						<Link href="/blog">
							<li className="menu-item my-2">Blog</li>
						</Link>
						<Link href="/contact">
							<li className="menu-item">Contact</li>
						</Link>
					</ul>
					<div className="flex h-4 gap-5">
						<Image
							src="/assets/facebook.svg"
							width={16}
							height={16}
							alt="facebook"
						/>
						<Image
							src="/assets/instagram.svg"
							width={16}
							height={16}
							alt="instagram"
						/>
						<Image
							src="/assets/twitter.svg"
							width={16}
							height={16}
							alt="twitter"
						/>
						<Image
							src="/assets/linkedIn.svg"
							width={16}
							height={16}
							alt="linkedIn"
						/>
					</div>
				</div>
				<div className="py-8 flex justify-between">
					<Image
						src="/assets/copyright-info.png"
						width={231}
						height={55}
						alt="copyright"
					/>
					<div className="flex gap-4">
						<p className="text-secondary">Terms of Use</p>
						<p className="text-secondary">Privacy Policy</p>
						<p className="text-secondary">Cookie Policy</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
