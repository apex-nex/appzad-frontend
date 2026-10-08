import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  updatedAt?: string;
  summary?: string;
  author?: string;
  authorImg?: string;
  kind?: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

export function getLegalPage(slug: string) {
  const filePath = path.join(process.cwd(), "content/legal", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const { metadata, content } = readMDXFile(filePath);
  return { metadata, slug, content };
}
