/** @type {import('next').NextConfig} */
const dynamicOrigins = (process.env.NEXT_DEV_ORIGINS || "")
	.split(",")
	.map((o) => o.trim())
	.filter(Boolean);

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	}
};

export default nextConfig;
