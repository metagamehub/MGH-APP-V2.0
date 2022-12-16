import "animate.css";
import { useState } from "react";

import useConnectWeb3 from "../backend/connectWeb3";
import { useAppSelector } from "../state/hooks";

import Sidebar from "../components/Sidebar";
import WalletButton from "../components/WalletButton";
import WalletModal from "../components/WalletModal";
import NetworkButton from "../components/NetworkButton";
import { OptimizedImage } from "../components/General";

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	const [openModal, setOpenModal] = useState(false);
	const { chainId } = useAppSelector((state) => state.account);
	const { web3Provider, disconnectWallet } = useConnectWeb3();

	const list = [
		{
			url: "/valuation",
			label: "LAND Valuation",
			icon: "b",
		},
		{
			url: "/nftValuation",
			label: "NFT Valuation",
			icon: "c",
		},
		{
			url: "/swap",
			label: "SWAP",
			icon: "h",
		},
		{
			url: "/liquidity",
			label: "LIQUIDITY",
			icon: "f",
		},
		{
			url: "/stake",
			label: "STAKE",
			icon: "d",
		},
		{
			url: "https://snapshot.org/#/metagamehub.eth",
			label: "GOVERNANCE",
			icon: "a",
		},
		{
			url: "https://eth-india-hackaton-git-pushnotifications-dap-frontend.vercel.app/",
			label: "MLM",
			icon: "i",
		},
		{
			url: "https://avatar-generator-metagamehub.vercel.app/?campaign=decentraland",
			label: "EDIT AVATAR",
			icon: "g",
		},
	];

	return (
		<div className="font-plus text-grey-content w-full">
			{/* Page wrapper */}
			<main className="w-full min-h-screen pl-24">{children}</main>
			{/* Wallet connection wrapper */}
			<div className="absolute top-0 right-0">wallet connection</div>
			{/* Sidebar wrapper */}
			<div className="fixed inset-0 w-24 overflow-hidden">
				<Sidebar list={list} />
			</div>
		</div>
	);
}
