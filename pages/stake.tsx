import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

interface NetfworkProps {
	titleNetwork: string;
	description: string;
	link: string;
	src: string;
}

function Network({ titleNetwork, description, link, src }: NetfworkProps) {
	return (
		<Link href={link}>
			<div className="nm-flat-hard flex flex-col w-1/4 items-center px-3 py-6 xs:p-5 text-center justify-center rounded-xl">
				<img src={src} className="mb-8 w-full" />
				<p className="text-grey-content font-plus font-bold text-xl sm:text-3xl">
					{titleNetwork}
				</p>
				<p className="text-grey-content font-plus font-light text-sm leading-5 sm:text-xl pt-3">
					{description}
				</p>
			</div>
		</Link>
	);
}

export default function Stake() {
	return (
		<>
			<Head>
				<title>MGH - Staking</title>
				<meta
					name="description "
					content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data."
				/>
			</Head>

			<div className="flex w-full bg-grey-dark mt-24 rounded-xl h-full place-content-center py-[10%] ">
				<Network
					titleNetwork="Ethereum Staking"
					description="Bonded staking, fixed APY, 4 different Pools"
					link="/stake-ethereum"
					src="/images/ethereum-eth-logo.png"
				/>
				<Network
					titleNetwork="Polygon Staking"
					description="unbonded staking, variable APY"
					link="/stake-polygon"
					src="/images/polygon-matic-logo.png"
				/>
			</div>
		</>
	);
}
