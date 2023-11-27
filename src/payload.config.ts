import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path from "path";

export default buildConfig({
	serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
	collections: [],
	routes: {
		admin: "/super_user"
	},
	admin: {
		bundler: webpackBundler(),
		meta: {
			titleSuffix: "- DigitalHippo",
			favicon: "/favicon.ico",
			ogImage: "/thumbnail.jpg",
		}
	},
	editor: slateEditor({}),
	db: mongooseAdapter({
		url: process.env.MONGODB_URL!,
	}),
	rateLimit: {
		max: 2000,
	},
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	}
});