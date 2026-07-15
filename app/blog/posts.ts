// Single source of truth for the blog.
// Posts live here in the file system (in git) — no database.
// The reader-facing pages, the "Copy for AI" button, and the /blog/llms.txt
// manifest are ALL generated from this file, so they can never drift apart.

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "code"; code: string; caption?: string }
  // A row of headline numbers (dead-ends tally, before/after sizes, etc.)
  | { type: "stats"; items: { value: string; label: string }[] }
  // src may be empty — the page then shows a labelled placeholder so you know
  // exactly which image to drop in, and the description still feeds the AI layer.
  | { type: "image"; src: string; alt: string; description: string }
  // An inline, hand-drawn SVG figure (no image file needed). `variant` picks
  // which diagram to render in the page; `description` is the AI-facing text.
  | { type: "diagram"; variant: string; caption?: string; description: string }
  // A small footer note (credits, acknowledgements) with an optional link.
  | { type: "note"; text: string; href?: string; linkText?: string };

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO, e.g. "2026-07-10"
  readingTime: string; // e.g. "4 min"
  summary: string; // one-line, human + AI facing
  keyPoints: string[]; // the AI-facing "what this post is about"
  content: Block[];
};

export const posts: Post[] = [
  {
    slug: "make-your-work-readable-by-ai",
    title: "If you publish it, make it readable by AI",
    date: "2026-07-12",
    readingTime: "4 min",
    summary:
      "We put our work online to be found. The audience now includes LLMs and agents — so making your content machine-readable is just the modern version of being accessible.",
    keyPoints: [
      "The whole point of publishing online is to be accessible to whoever is looking — and increasingly, who is looking is an LLM or an agent acting for a human.",
      "For a decade we optimized content to be found by search engines (SEO); the same shift is now happening for AI, and it is worth getting ahead of.",
      "If you do not describe your own work for machines, they will guess — scraping HTML, dropping context, ignoring images. You lose control of how you are represented.",
      "This blog publishes its own machine-readable layer at /blog/llms.txt: a self-authored description of every post, including text for every image.",
      "Making content AI-readable is not surrendering it — it is the opposite. You decide what the machine sees and how you are summarized.",
    ],
    content: [
      {
        type: "p",
        text: "Why do we put anything online at all? To be found. A portfolio, a blog post, a project write-up — we publish it so that someone, somewhere, looking for exactly this, can actually reach it. Accessibility has always been the whole point.",
      },
      {
        type: "p",
        text: "For most of the web's life, the someone doing the looking was a person with a search bar. So we learned to be legible to search engines — titles, meta tags, sitemaps, the whole ritual of SEO. Not because we loved Google, but because that is where the audience was.",
      },
      {
        type: "h2",
        text: "The audience changed",
      },
      {
        type: "p",
        text: "The audience is shifting again. More and more, the thing reading your work is an LLM, or an agent acting on someone's behalf — answering a question, comparing options, deciding whether you are the person or the project worth surfacing. If your content is not readable to them, you are quietly invisible to a growing slice of the people you were trying to reach.",
      },
      {
        type: "quote",
        text: "We are moving into an era where being accessible means being readable by machines, not just people.",
      },
      {
        type: "h2",
        text: "Describe yourself, or be guessed at",
      },
      {
        type: "p",
        text: "Here is the part I care about most: if you do not describe your own work for machines, they will describe it for you. They will scrape the HTML, strip the navigation, drop the nuance, ignore the images, and reconstruct a version of you from whatever survives. That version is out of your hands.",
      },
      {
        type: "p",
        text: "Making your content AI-readable is not giving it away. It is the opposite. It means you get to decide what the machine sees, how your work is summarized, which points matter, what every image actually shows. You are taking back the data layer of your own presence online.",
      },
      {
        type: "h2",
        text: "So this blog does it on purpose",
      },
      {
        type: "p",
        text: "That is why this blog publishes its own machine-readable layer at /blog/llms.txt — a clean, self-authored description of every post, written in my words, with a text description of each image. Any model or agent can read it and understand what I meant, instead of what a parser could salvage. Same source of truth as the page you are reading; I just made sure the machines get an honest copy too.",
      },
    ],
  },
  {
    slug: "reverse-engineering-heycyan",
    title: "How I reverse-engineered my smart glasses and built my own app to take back control of the input data",
    date: "2026-07-13",
    readingTime: "9 min",
    summary:
      "I got AI smart glasses from China (HeyCyan - Model:E03S). The AI reasoning wasn't good, it couldn't fetch real-time data, and everything was locked into the vendor's app. So I set out to build my own app and control the data layer myself.",
    keyPoints: [
      "I got the HeyCyan smart glasses — they capture photos, audio, and video, and let you reason with an AI over a text or an image.",
      "The vendor app's AI wasn't satisfactory, and I traced it to find it was just an OpenAI model behind their closed app.",
      "My goal was to own the data layer: import the media off the glasses into my own app and plug in whatever AI model I wanted — which meant getting the full-resolution files, not the low-res BLE version.",
      "To do that I first had to figure out how the glasses actually transfer media, and there were no docs explaining any of it.",
      "The real transfer ran over Wi-Fi Direct, not Bluetooth. The bundled Bluetooth SDK (368 classes) was a generic smartwatch SDK with no transfer code in it at all.",
      "With nothing documented, I simulated a real transfer, captured the traffic on the wire, found the exact request body the app was sending, and reverse-engineered the protocol from it.",
      "Along the way: a Bluetooth command [02 01 04 01] is what triggers the glasses' Wi-Fi Direct network, a missing okhttp User-Agent header was causing 400 errors, and an SDK bug even misreported the glasses' IP (it read one byte twice and skipped the next).",
      "Result: full-resolution media (a 773 KB photo) pulled straight into my own app, versus the 18 KB thumbnail the vendor's Bluetooth path allowed.",
      "The AI pipeline behind the camera: Android's on-device SpeechRecognizer for speech-to-text, Google's Gemini 2.5 Flash as the multimodal reasoning brain (one call handles the spoken question and the captured image together), and Android's built-in TextToSpeech for the spoken reply. Automations wired onto the output are the next step.",
    ],
    content: [
      {
        type: "p",
        text: "I bought AI smart glasses expecting a wearable assistant. The built-in AI was weak and outdated, it couldn't touch anything real-time, and every \"smart\" feature routed through the vendor's closed app. I'd point the glasses at something, ask a question, and get an answer that was not satisfactory.",
      },
      {
        type: "p",
        text: "The hardware was fine. A camera on your face and a mic — that's a genuinely useful capture device. The problem was entirely the software wrapped around it. Once I saw it that way, the goal got clear: I need to get underneath the vendor's app and see how it works. If I could own the data layer — pull the photos and audio off the glasses myself — I could plug in whatever brain I wanted. Live data. My own automations.",
      },
      {
        type: "image",
        src: "/heycyan-1.jpeg",
        alt: "The AI camera glasses held up in front of a monitor",
        description:
          "A hero photo of the smart glasses held up in front of my monitor — the ordinary-looking gadget this whole teardown is about.",
      },
      {
        type: "h2",
        text: "The SDK looked promising and wasn't",
      },
      {
        type: "p",
        text: "The glasses shipped with a Bluetooth SDK, so I started there. 368 classes — encouraging, until I read the names: heart rate, blood oxygen, ECG, sleep, menstrual cycle, prayer times. On a pair of glasses. Clearly a generic smartwatch SDK the vendor reused across their lineup, and most of it does nothing on this hardware.",
      },
      {
        type: "p",
        text: "One method looked like exactly what I needed — writeIpToSoc, which sounded like \"send the glasses an IP and start transferring.\" I built around it. Nothing came back. So I had the AI help me sweep the whole library for an HTTP call, a socket, any URL at all. Between us we came up empty. There was no file-transfer code in the SDK — whatever moved the media lived in the vendor's app, not the library they handed developers. So the target shifted: take the app apart.",
      },
      {
        type: "h2",
        text: "Reading the decompiled app",
      },
      {
        type: "p",
        text: "I pulled the vendor APK off the phone and decompiled it with jadx. Decompiled Android is a wall of ugly, machine-generated code, and this is where having an AI in the loop earned its keep — I'd point it at a class and we'd work out together what it was doing, which threads to pull, which to ignore. The thing that cracked it open wasn't clever logic, it was the strings. Developers leave debug log lines right in the shipped app:",
      },
      {
        type: "code",
        code: '"[Music P2P] HTTP Server started at "\n"[Music P2P] isGroupOwner localIp="\n"[Music P2P] transfer complete"',
        caption:
          "Leftover debug log strings in the shipped app — the crack that opened everything.",
      },
      {
        type: "p",
        text: "That reframed everything. The heavy lifting wasn't Bluetooth — it was Wi-Fi Direct. The glasses stand up their own little network, run an HTTP server on it, and the phone pulls files over that. Bluetooth was just the doorbell that tells the glasses to bring the network up. Tracing the photo path, we found the method that starts it and the four-byte Bluetooth command it fires first:",
      },
      {
        type: "code",
        code: "[ 0x02, 0x01, 0x04, 0x01 ]   // \"start the transfer network\"",
      },
      {
        type: "diagram",
        variant: "two-transport",
        caption:
          "Two transports, two jobs: Bluetooth kickstarts the transfer, Wi-Fi Direct carries the files.",
        description:
          "A simple diagram: Bluetooth is the 'doorbell' (a tiny control command), and Wi-Fi Direct is the actual 'data pipe' — the glasses run an HTTP server the phone downloads full-resolution files from.",
      },
      {
        type: "h2",
        text: "The part where nothing worked",
      },
      {
        type: "p",
        text: "Knowing the shape of the answer and actually getting it are very different. I sent that command and waited. Silence. Sent variations, dozens of times. More silence. Before anything worked, the tally of dead ends was:",
      },
      {
        type: "stats",
        items: [
          { value: "11", label: "Bluetooth commands guessed and sent — all met with silence" },
          { value: "4", label: "HTTP paths I was sure were right — all returning 400" },
          { value: "1", label: "SDK bug that was actively lying to me about the IP" },
        ],
      },
      {
        type: "p",
        text: "That last one was mean. The library's own function for reading the glasses' IP built the address from the wrong bytes — it read one byte twice and skipped the next entirely. It told me the glasses were at 192.168.1.1 when they were actually at 192.168.1.42. Knocking on the wrong door, blaming the lock. We only caught it by decoding the raw frame by hand and comparing it against what the SDK claimed — the AI walked the byte offsets with me until the mismatch was obvious.",
      },
      {
        type: "code",
        code: "// SDK builds the IP from bytes 10 . 11 . 12 . 12   ← reads byte 12 twice,\n//                                            ↑ ↑        never reads byte 13\nip = b[10] . b[11] . b[12] . b[12]      // WRONG → 192.168.1.1\nip = b[10] . b[11] . b[12] . b[13]      // RIGHT → 192.168.1.42",
        caption: "The one-character bug that cost me days: a double-read of byte 12.",
      },
      {
        type: "p",
        text: "I also burned an evening on a rabbit hole that was nothing. I'd found HMAC signing code in the app — timestamps, a secret key, the works — and convinced myself the glasses' server needed a signature on every request. It didn't. That signing was for the app talking to the vendor's cloud, not the glasses on my desk. Good reminder that code existing in an app doesn't mean it's on the path you care about.",
      },
      {
        type: "h2",
        text: "Watching it on the wire",
      },
      {
        type: "p",
        text: "When guessing kept failing, the AI's suggestion was the one that broke the logjam: stop reading the code, watch the actual traffic. So I put a no-root packet capture on the phone, filtered to the vendor app, and ran a real transfer while recording every byte. And there it was, in plaintext — the exact request I'd been failing to reconstruct:",
      },
      {
        type: "code",
        code: "GET /files/media.config HTTP/1.1\nHost: 192.168.49.43\nConnection: Keep-Alive\nUser-Agent: okhttp/4.9.2\n\n→ 200 OK\n20260710200000875.mp4",
        caption: "The captured request — the answer I'd spent days failing to type by hand.",
      },
      {
        type: "image",
        src: "/heycyan-6.jpeg",
        alt: "Packet capture showing the plaintext HTTP request",
        description:
          "A screenshot of the no-root packet capture tool (PCAPdroid) showing the plaintext GET /files/media.config request — with the okhttp User-Agent header — and its 200 OK response returning the media file name. The 'aha' moment where the real protocol became visible.",
      },
      {
        type: "image",
        src: "/heycyan-7.jpeg",
        alt: "Packet capture connection overview for the HeyCyan app",
        description:
          "The same capture's connection overview: PCAPdroid attributes the request to the HeyCyan app hitting 192.168.49.43/files/media.config over plain HTTP (TCP) — confirming the glasses' own Wi-Fi Direct web server was the real transfer path.",
      },
      {
        type: "p",
        text: "Two things I'd had wrong jumped out. The path wasn't the deep /storage/... route I'd inferred from the decompiler — it was a clean /files/media.config. And the server was picky about User-Agent: leave it off and it returns 400. My hand-typed requests had no User-Agent. The app's did. That one header was the whole difference between \"invalid request\" and \"here are your files.\" So the full protocol, finally:",
      },
      {
        type: "code",
        code: "1.  BLE trigger  [02 01 04 01]   →  glasses bring up a Wi-Fi Direct network\n2.  GET /files/media.config      →  the file list\n3.  GET /files/<name>            →  each full-resolution file",
        caption: "Plain HTTP, no auth, the right path with the right header.",
      },
      {
        type: "h2",
        text: "The last mile is always the weird part",
      },
      {
        type: "p",
        text: "The first 200 OK felt like the finish line. It wasn't — it was a second batch of problems, the kind you only hit on real hardware. And this is where the AI-as-pair-programmer really paid off, because each one was a specific, obscure failure and we could chew through them one at a time. The server hangs up after every response, so any client that reuses the connection dies with \"unexpected end of stream\" — force a fresh connection per request. Just opening a bare TCP connection to test reachability jams the little server — you knock with a complete request or not at all. Ask for the file list right after recording and it hangs, because the glasses are still encoding — that unexplained loading spinner in the vendor app is exactly what it's waiting on. And Android quietly sends requests over mobile data instead of the glasses' Wi-Fi unless you pin them, and blocks plain HTTP until you whitelist the address.",
      },
      {
        type: "p",
        text: "Each was an hour of confusion followed by a small click of it making sense. Then it worked — a full-resolution photo pulled straight off the glasses into my own app. The Bluetooth thumbnail the vendor path had been giving me was about 18 KB.",
      },
      {
        type: "image",
        src: "/heycyan-8.jpeg",
        alt: "Packet capture connections list showing the full-resolution media transfer",
        description:
          "PCAPdroid's connection list for the HeyCyan app: a tiny config fetch (776 B) alongside the ~880 KB full-resolution media transfer pulled straight off the glasses over Wi-Fi Direct — the full-size data the vendor's 18 KB Bluetooth thumbnail path never exposed.",
      },
      {
        type: "h2",
        text: "The app",
      },
      {
        type: "p",
        text: "I wrapped all of it into my own Android app. The reverse-engineered transfer lives as a small, self-contained core — connect over Wi-Fi Direct, list the files, download them — with a gallery on top, and the whole capture-to-AI pipeline behind it. It does everything the vendor app did, minus the parts that annoyed me, plus the hooks I actually wanted: full-resolution import, my own model behind the camera, room to bolt on automations.",
      },
      {
        type: "image",
        src: "/heycyan-3.jpeg",
        alt: "Custom Android app home screen with the glasses connected",
        description:
          "The home screen of my own app: the glasses connected over Bluetooth (device name, battery, disconnect), a live camera frame pulled from the glasses, and a Capture button that kicks off the whole voice-plus-image pipeline.",
      },
      {
        type: "image",
        src: "/heycyan-4.jpeg",
        alt: "Custom Android app gallery of captures pulled off the glasses",
        description:
          "The gallery in my app — full-resolution photos and videos pulled off the glasses over Wi-Fi Direct, replacing the vendor's closed app and its low-res thumbnails.",
      },
      {
        type: "image",
        src: "/heycyan-5.jpeg",
        alt: "Custom Android app device screen with on-device storage and controls",
        description:
          "The device screen: on-device storage counts and direct controls for the glasses — speaker, AI wake word, wear detection, and time sync — all driven by the reverse-engineered Bluetooth commands.",
      },
      {
        type: "h2",
        text: "The brain behind the camera",
      },
      {
        type: "p",
        text: "Owning the data layer was the hard part. Once the media flowed into my own app, choosing the intelligence was the easy, fun part — and I kept the whole pipeline deliberately simple: capture on the glasses, understand with a model I pick, answer back in my ear.",
      },
      {
        type: "p",
        text: "For turning my voice into text I use Android's own on-device SpeechRecognizer — no separate transcription cloud, it just runs on the phone. The reasoning brain is Google's Gemini 2.5 Flash, and picking a multimodal model was the whole point: a single call takes both my spoken question and the full-resolution image the glasses captured, so it can actually reason about what I'm looking at, not just what I said. The reply is spoken back through Android's built-in TextToSpeech. That's the exact thing the vendor got wrong — a stale model I couldn't change — replaced with a current one I can swap any time.",
      },
      {
        type: "image",
        src: "/heycyan-2.jpeg",
        alt: "The app answering a question about a captured image",
        description:
          "The pipeline in action: I captured a keyboard through the glasses and asked what layout it uses. Gemini 2.5 Flash reads the full-resolution image and my spoken question together and answers that it's a 65% layout, walking through its reasoning — the kind of multimodal reply the vendor's stale model couldn't give.",
      },
      {
        type: "p",
        text: "And this is only the pipe. The real payoff is what happens on the other end of it: wiring the model's output into automations. Point at a whiteboard and have it land as clean text in my notes. Catch a receipt and turn it into a row in a sheet. Speak a passing thought and have it filed as a task before it's gone. That's the part I'm building next — the glasses become the least interesting piece, which is exactly what you want from an input device.",
      },
      {
        type: "h2",
        text: "What actually surprised me",
      },
      {
        type: "p",
        text: "The thing I keep coming back to is how wrong the decompiler let me be. Reading the decompiled app felt like understanding the system, and I was maybe 90% right — the dangerous kind of wrong, because the missing 10% was invisible from the source and cost me days. The details that actually broke everything — the required User-Agent header, the SDK's byte-reading IP bug, the real /files/media.config path — couldn't be seen just by reading the code. It looked complete and correct.",
      },
      {
        type: "p",
        text: "The other shift was how I started treating failures. Early on, every silent command and every 400 felt like a wall. Somewhere in the middle it flipped and I began reading them as the device telling me something specific — a 400 that never changes is \"your request is malformed,\" not \"no\"; a timeout only after recording video is \"I'm busy,\" not \"I'm broken.\" Working with the AI reinforced that, because its instinct was always to form a hypothesis about why something failed rather than just retry it.",
      },
      {
        type: "p",
        text: "And I came away with a real sense of how this kind of work changes when you've got a capable AI beside you. A few years ago this project would have been out of reach for me on a weekend budget — the decompiled-bytecode reading alone would have burned all my patience. Having something that could keep pace with the tedious parts, suggest the right tool at the right moment, and decode byte layouts on demand meant I got to stay in the part I'm actually good at: staying curious, forming the next question, deciding what mattered. The curiosity and the goal were mine. The reach was ours.",
      },
      {
        type: "p",
        text: "These glasses will never get official docs. But now I can build on them — and the assistant I actually wanted turned out to be a data layer, and a good pair-programmer, away.",
      },
      {
        type: "note",
        text: "Built on top of FerSaiyan's open-source HeyCyan SDK — thanks to them for the groundwork.",
        href: "https://github.com/FerSaiyan/Alternative-HeyCyan-App-and-SDK",
        linkText: "View the repo",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

// Deterministic newest-first ordering (string ISO dates sort correctly).
export const postsByDate = [...posts].sort((a, b) =>
  a.date < b.date ? 1 : a.date > b.date ? -1 : 0
);

// ---- Shared markdown generation ----
// Used by BOTH the "Copy for AI" button and the /blog/llms.txt manifest,
// so the machine-readable output is identical everywhere.

function blockToMarkdown(block: Block): string {
  switch (block.type) {
    case "h2":
      return `## ${block.text}`;
    case "p":
      return block.text;
    case "quote":
      return `> ${block.text}`;
    case "code":
      return "```\n" + block.code + "\n```" + (block.caption ? `\n\n*${block.caption}*` : "");
    case "stats":
      return block.items.map((i) => `- **${i.value}** — ${i.label}`).join("\n");
    case "image":
      // The description is the AI-facing text — it survives even with no image file.
      return `![${block.alt}](${block.src})\n\n*Image: ${block.description}*`;
    case "diagram":
      // No image file — the description IS the machine-readable representation.
      return `*Diagram: ${block.description}*`;
    case "note":
      return block.href
        ? `${block.text} [${block.linkText ?? "link"}](${block.href})`
        : block.text;
  }
}

export function postToMarkdown(post: Post): string {
  const lines: string[] = [];
  lines.push(`# ${post.title}`);
  lines.push("");
  lines.push(`*${post.date} · ${post.readingTime} read*`);
  lines.push("");
  lines.push(`> ${post.summary}`);
  lines.push("");
  lines.push("**Key points:**");
  for (const point of post.keyPoints) lines.push(`- ${point}`);
  lines.push("");
  lines.push("---");
  lines.push("");
  for (const block of post.content) {
    lines.push(blockToMarkdown(block));
    lines.push("");
  }
  return lines.join("\n").trim() + "\n";
}
