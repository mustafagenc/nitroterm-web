/* eslint-disable @next/next/no-img-element */
import { getBaseUrl } from "@lib/helpers";
import { ImageResponse } from "next/og";

export async function GET() {

  const baseUrl = getBaseUrl();
  const logoSize = 140;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div tw="flex ">
          <div tw="flex flex-col w-full py-12 px-4 md:items-center justify-between p-8 ">
            <p>
              <img
                src={`${baseUrl}/logo.svg`}
                alt="Logo"
                width={logoSize}
                height={logoSize}
                style={{
                  width: `${logoSize}px`,
                  height: `${logoSize}px`,
                }}
              />
            </p>
            <h1 tw="text-5xl font-bold text-gray-900">Nitrokit Terminal</h1>
            <p tw="text-2xl text-gray-900 text-center leading-9">
              Powerful terminal application written in Rust that provides
              comprehensive project management functionalities, automatic
              release notes generation, and intelligent dependency management.
            </p>
            <div tw="mt-12 flex text-3xl font-bold text-blue-600">
              https://nitrokit.tr
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
