/*
WHAT:

*/

interface Props {
  callouts: any[];
  title: string;
}

export default function CenterCallout({ title, callouts }: Props) {
  return (
    <section className="w-full lg:order-auto grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 my-40 flex-wrap">
      <div className="order-2 place-self-end lg:self-start lg:mb-20  h-40 w-40 flex flex-col gap-4">
        <svg
          width="100%"
          viewBox="0 0 172 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_343_151)">
            <path
              d="M27.6548 90.703C22.3226 70.803 34.1321 50.3483 54.0321 45.0161L85.2373 36.6547C105.137 31.3225 125.592 43.1321 130.924 63.032L144.112 112.249C149.444 132.149 137.635 152.604 117.735 157.936L86.5294 166.298C66.6294 171.63 46.1747 159.82 40.8425 139.92L27.6548 90.703Z"
              fill="#F4E4A8"
            />
            <path
              d="M45.9233 92.0645C40.5911 72.1645 52.4007 51.7099 72.3007 46.3777L89.7875 41.6921C109.687 36.3599 130.142 48.1694 135.474 68.0694L144.345 101.176C149.677 121.076 137.868 141.53 117.968 146.862L100.481 151.548C80.5809 156.88 60.1263 145.071 54.7941 125.171L45.9233 92.0645Z"
              fill="#FFEFB5"
            />
            <path
              d="M127.754 75.2135C127.754 81.9245 122.314 87.3649 115.603 87.3649C108.892 87.3649 103.451 81.9245 103.451 75.2135C103.451 68.5025 108.892 63.0621 115.603 63.0621C122.314 63.0621 127.754 68.5025 127.754 75.2135Z"
              fill="#312F2A"
            />
            <path
              d="M95.6121 83.8371C95.6121 90.5481 89.9963 95.9885 83.0688 95.9885C76.1412 95.9885 70.5254 90.5481 70.5254 83.8371C70.5254 77.1261 76.1412 71.6857 83.0688 71.6857C89.9963 71.6857 95.6121 77.1261 95.6121 83.8371Z"
              fill="#312F2A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M124.676 99.0902C126.344 100.332 126.683 102.682 125.431 104.338C121.811 109.127 115.104 112.225 108.356 113.712C101.495 115.225 93.6917 115.281 87.2205 113.141C85.2414 112.486 84.1719 110.364 84.8316 108.4C85.4912 106.436 87.6303 105.375 89.6093 106.029C94.4695 107.637 100.83 107.693 106.717 106.395C112.718 105.072 117.342 102.547 119.388 99.8399C120.639 98.1838 123.007 97.8482 124.676 99.0902Z"
              fill="#312F2A"
            />
            <path
              d="M61.203 81.0819C59.7506 75.8814 62.7891 70.4882 67.9896 69.0358L88.3153 63.3592C93.5158 61.9068 98.909 64.9452 100.361 70.1457L104.793 86.0138C106.245 91.2143 103.207 96.6075 98.0066 98.0599L77.6808 103.737C72.4803 105.189 67.0871 102.15 65.6347 96.95L61.203 81.0819Z"
              fill="#C6BDBD"
              fill-opacity="0.44"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M89.8932 69.009L69.5674 74.6856C67.4872 75.2666 66.2719 77.4239 66.8528 79.5041L71.2845 95.3721C71.8654 97.4523 74.0227 98.6677 76.1029 98.0867L96.4287 92.4101C98.5089 91.8292 99.7242 89.6719 99.1433 87.5917L94.7116 71.7236C94.1307 69.6434 91.9734 68.4281 89.8932 69.009ZM67.9896 69.0358C62.7891 70.4882 59.7506 75.8814 61.203 81.0819L65.6347 96.95C67.0871 102.15 72.4803 105.189 77.6808 103.737L98.0066 98.0599C103.207 96.6075 106.245 91.2143 104.793 86.0138L100.361 70.1457C98.909 64.9452 93.5158 61.9068 88.3153 63.3592L67.9896 69.0358Z"
              fill="#312F2A"
            />
            <path
              d="M95.4228 72.9739C93.9704 67.7735 97.0088 62.3802 102.209 60.9278L119.758 56.0268C124.959 54.5744 130.352 57.6128 131.804 62.8133L135.944 77.6372C137.397 82.8377 134.358 88.2309 129.158 89.6833L111.609 94.5844C106.408 96.0368 101.015 92.9984 99.5628 87.7979L95.4228 72.9739Z"
              fill="#C6BDBD"
              fill-opacity="0.44"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M121.336 61.6765L103.787 66.5776C101.707 67.1586 100.492 69.3159 101.073 71.3961L105.213 86.22C105.794 88.3002 107.951 89.5156 110.031 88.9346L127.58 84.0335C129.66 83.4526 130.875 81.2953 130.295 79.2151L126.154 64.3912C125.574 62.311 123.416 61.0956 121.336 61.6765ZM102.209 60.9278C97.0088 62.3802 93.9704 67.7735 95.4228 72.9739L99.5628 87.7979C101.015 92.9984 106.408 96.0368 111.609 94.5844L129.158 89.6833C134.358 88.2309 137.397 82.8377 135.944 77.6372L131.804 62.8133C130.352 57.6128 124.959 54.5744 119.758 56.0268L102.209 60.9278Z"
              fill="#312F2A"
            />
            <path
              d="M35.2139 85.0034L64.3928 75.2346L66.6352 81.9324L37.4562 91.7012L35.2139 85.0034Z"
              fill="#312F2A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M35.2139 85.0034L37.4562 91.7012L66.6352 81.9324L64.3928 75.2346L35.2139 85.0034Z"
              fill="#312F2A"
            />
            <path
              d="M33.4716 100.451L36.383 99.061C37.4877 98.5337 38.021 97.28 37.7625 96.0917C36.9904 92.5418 36.8248 88.0677 37.2281 83.3085C37.3034 82.4194 37.8845 81.6549 38.7161 81.3144L43.3963 79.3982C44.0004 79.1509 44.4829 78.6764 44.7164 78.071C48.2372 68.9421 49.4745 56.7508 65.0134 52.1737C84.6895 46.3779 113.034 43.9109 123.051 48.7422C104.962 25.9012 63.0139 34.1865 40.3201 52.1737C21.5387 67.0598 24.4324 84.5119 30.1655 99.1786C30.6751 100.482 32.2012 101.057 33.4716 100.451Z"
              fill="#2B1200"
              fill-opacity="0.51"
            />
          </g>
          <defs>
            <clipPath id="clip0_343_151">
              <rect width="172" height="172" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className="w-full text-center">Philipp</p>
      </div>
      <div className="lg:order-2 lg:order-auto flex flex-col items-center justify-center gap-6 text-center col-span-2 lg:col-span-2">
        <h2 className="text-[40px] font-semibold font-poppins leading-tight dark:text-white">
          {title}
        </h2>
        <ul className="flex flex-col gap-4 text-lg">
          {callouts.map((callout: any, i: number) => (
            <li key={i}>{callout.content}</li>
          ))}
        </ul>
      </div>
      <div className="order-3 lg:order-auto place-self-start lg:mt-20 lg:self-end h-40 w-40 flex flex-col gap-4">
        <svg
          width="100%"
          viewBox="0 0 172 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_343_123)">
            <path
              d="M26.7276 90.5709C21.3563 70.6723 33.2525 50.219 53.2986 44.8871L84.7329 36.5263C104.779 31.1945 125.384 43.0032 130.755 62.9018L144.04 112.116C149.411 132.014 137.515 152.468 117.469 157.8L86.0345 166.161C65.9884 171.492 45.3835 159.684 40.0122 139.785L26.7276 90.5709Z"
              fill="#F4E4A8"
            />
            <path
              d="M45.1309 91.9324C39.7596 72.0337 51.6558 51.5804 71.7019 46.2486L89.3172 41.5633C109.363 36.2315 129.968 48.0402 135.339 67.9389L144.275 101.043C149.647 120.942 137.75 141.395 117.704 146.727L100.089 151.412C80.043 156.744 59.4382 144.935 54.0668 125.036L45.1309 91.9324Z"
              fill="#FFEFB5"
            />
            <path
              d="M125.977 77.2276C125.977 84.4378 120.088 90.2828 112.825 90.2828C105.561 90.2828 99.6729 84.4378 99.6729 77.2276C99.6729 70.0174 105.561 64.1724 112.825 64.1724C120.088 64.1724 125.977 70.0174 125.977 77.2276Z"
              fill="#312F2A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M112.825 82.8227C115.938 82.8227 118.461 80.3177 118.461 77.2276C118.461 74.1375 115.938 71.6325 112.825 71.6325C109.712 71.6325 107.188 74.1375 107.188 77.2276C107.188 80.3177 109.712 82.8227 112.825 82.8227ZM112.825 90.2828C120.088 90.2828 125.977 84.4378 125.977 77.2276C125.977 70.0174 120.088 64.1724 112.825 64.1724C105.561 64.1724 99.6729 70.0174 99.6729 77.2276C99.6729 84.4378 105.561 90.2828 112.825 90.2828Z"
              fill="#312F2A"
            />
            <path
              d="M95.9123 84.6878C95.9123 91.898 90.024 97.743 82.7604 97.743C75.4967 97.743 69.6084 91.898 69.6084 84.6878C69.6084 77.4776 75.4967 71.6325 82.7604 71.6325C90.024 71.6325 95.9123 77.4776 95.9123 84.6878Z"
              fill="#312F2A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M82.7604 90.2829C85.8734 90.2829 88.3969 87.7779 88.3969 84.6878C88.3969 81.5977 85.8734 79.0927 82.7604 79.0927C79.6474 79.0927 77.1238 81.5977 77.1238 84.6878C77.1238 87.7779 79.6474 90.2829 82.7604 90.2829ZM82.7604 97.743C90.024 97.743 95.9123 91.898 95.9123 84.6878C95.9123 77.4776 90.024 71.6325 82.7604 71.6325C75.4967 71.6325 69.6084 77.4776 69.6084 84.6878C69.6084 91.898 75.4967 97.743 82.7604 97.743Z"
              fill="#312F2A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M124.472 94.759C126.133 95.995 126.469 98.333 125.224 99.9811C121.623 104.747 114.95 107.83 108.237 109.311C101.411 110.816 93.6481 110.872 87.2101 108.742C85.2413 108.09 84.1772 105.978 84.8335 104.024C85.4898 102.069 87.6178 101.013 89.5867 101.665C94.4218 103.264 100.75 103.32 106.607 102.028C112.576 100.711 117.176 98.1988 119.212 95.505C120.457 93.857 122.812 93.523 124.472 94.759Z"
              fill="#312F2A"
            />
            <path
              d="M34.9232 88.7284C26.6244 83.2279 23.6758 77.9525 28.7236 98.8495C33.7713 119.747 60.8097 153.516 80.7223 153.516C100.635 153.516 127.716 146.746 137.672 139.976C144.184 135.548 145.637 128.825 145.239 116.877C146.036 111.302 145.668 107.057 144.841 103.337L143.646 98.1593C143.646 103.443 127.562 117.409 110.193 121.258C98.3498 123.882 72.6108 116.237 68.7748 106.921C65.987 100.151 56.4289 104.888 54.8359 105.726C36.5163 115.368 39.0938 91.4928 34.9232 88.7284Z"
              fill="black"
              fill-opacity="0.6"
            />
            <path
              d="M39.669 57.9358C28.1203 34.439 16.952 98.1729 34.4751 88.6149C31.8454 80.4532 50.4616 63.9309 42.2937 58.933C45.0031 58.4231 49.2605 54.3516 55.9973 51.0983C77.1884 42.7866 88.3097 41.2229 104.186 41.2229C116.59 41.2229 121.295 46.0018 124.481 49.5861C129.745 55.5081 126.074 49.1879 132.844 34.8509C139.097 21.6093 112.473 4.82949 90.6294 4.18546C77.8256 3.80796 66.3363 11.1946 55.185 18.8411C44.0336 26.4877 39.9194 35.6337 38.9059 41.2228C38.1862 45.1917 35.751 48.0356 39.669 57.9358Z"
              fill="#1F1800"
            />
            <path
              d="M39.669 57.9358C28.1203 34.439 16.952 98.1729 34.4751 88.6149C31.8454 80.4532 50.4616 63.9309 42.2937 58.933M39.669 57.9358C35.751 48.0356 38.1862 45.1917 38.9059 41.2229C39.9194 35.6337 44.0336 26.4877 55.1849 18.8411C66.3363 11.1946 77.8256 3.80796 90.6294 4.18546C112.473 4.82949 139.097 21.6093 132.844 34.8509C126.074 49.1879 129.745 55.5081 124.481 49.5861C121.295 46.0018 116.59 41.2229 104.186 41.2229C88.3097 41.2229 77.1884 42.7866 55.9973 51.0983C49.2605 54.3516 45.0031 58.4231 42.2937 58.933M39.669 57.9358C40.748 58.1807 41.6137 58.5169 42.2937 58.933"
              stroke="#1F1800"
            />
          </g>
          <defs>
            <clipPath id="clip0_343_123">
              <rect width="172" height="172" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="w-full text-center">Alexander</p>
      </div>
    </section>
  );
}
