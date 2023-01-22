/*
WHAT:

*/

import { SchmarrnType } from "../../shared-ts/enums";

interface Props {
    handler: (type: SchmarrnType) => void;
    type: SchmarrnType;
}   

export default function SchmarrnButton({handler, type}:Props) {
    return (
            <button onClick={() => handler(type)}> {/*TODO: export buttons correctly */}
                {type === SchmarrnType.Blaubeer &&
                    <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="7.41791" width="28.6604" height="33.6593" rx="10" transform="rotate(-15 0 7.41791)" fill="#F4E4A8"/>
                    <rect x="4.89746" y="7.7829" width="24.8531" height="29.188" rx="10" transform="rotate(-15 4.89746 7.7829)" fill="#FFEFB5"/>
                    <circle cx="25.5" cy="13.4999" r="2.5" fill="#312F2A" stroke="#312F2A" stroke-width="2"/>
                    <circle cx="11.5" cy="30.4999" r="4.5" fill="#378097"/>
                    <ellipse cx="34" cy="25.4999" rx="3" ry="4.5" fill="#378097"/>
                    <rect x="9.19519" y="30.0041" width="4" height="2" rx="1" transform="rotate(-143.014 9.19519 30.0041)" fill="#10531F"/>
                    <rect x="38.0214" y="27.6198" width="3.09409" height="2" rx="1" transform="rotate(-167.553 38.0214 27.6198)" fill="#10531F"/>
                    <circle cx="17.5" cy="15.4999" r="2.5" fill="#312F2A" stroke="#312F2A" stroke-width="2"/>
                    <circle cx="8.5" cy="7.49994" r="4.5" fill="#378097"/>
                    <path d="M19 20.9999C22 21.9999 26.5 20.9999 28 18.9999" stroke="#312F2A" stroke-width="2" stroke-linecap="round"/>
                    <rect x="7.11157" y="5.39813" width="4" height="2" rx="1" transform="rotate(-106.134 7.11157 5.39813)" fill="#10531F"/>
                    </svg>
                }
                {type === SchmarrnType.Apfel &&
                    <svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="23.4179" width="28.6604" height="33.6593" rx="10" transform="rotate(-15 6 23.4179)" fill="#F4E4A8"/>
                    <rect x="10.8975" y="23.7829" width="24.8531" height="29.188" rx="10" transform="rotate(-15 10.8975 23.7829)" fill="#FFEFB5"/>
                    <circle cx="31.5" cy="29.4999" r="2.5" fill="#312F2A" stroke="#312F2A" stroke-width="2"/>
                    <circle cx="23.5" cy="31.4999" r="2.5" fill="#312F2A" stroke="#312F2A" stroke-width="2"/>
                    <path d="M25 36.9999C28 37.9999 32.5 36.9999 34 34.9999" stroke="#312F2A" stroke-width="2" stroke-linecap="round"/>
                    <path d="M7.46957 9.67321C7.46957 9.67321 5.40571 18.9132 14.7605 22.9147C26.6652 28.0069 29.9169 21.3638 29.9169 21.3638L18.695 16.4166L7.46957 9.67321Z" fill="#D9FBDB"/>
                    <path d="M14.7605 22.9147C5.40571 18.9132 7.46957 9.67321 7.46957 9.67321L6.81875 9.6544C6.81487 14.3751 5.33238 19.5223 15.033 23.999C25.4775 28.8191 28.4523 23.592 30.0028 21.9807L29.9169 21.3638C29.9169 21.3638 26.6652 28.0069 14.7605 22.9147Z" fill="#81AF7D"/>
                    <rect width="1.26062" height="2.94146" rx="0.630312" transform="matrix(0.440519 -0.897743 -0.897743 -0.440519 19.0643 18.7466)" fill="#5C4310"/>
                    <rect width="1.26062" height="2.94146" rx="0.630312" transform="matrix(0.440519 -0.897743 -0.897743 -0.440519 19.0643 18.7466)" fill="#5C4310"/>
                    <path d="M14.0701 6.70177C14.0701 6.70177 10.9676 15.6467 19.806 20.6873C31.0535 27.1018 35.0405 20.8721 35.0405 20.8721L24.4548 14.6794L14.0701 6.70177Z" fill="#D9FBDB"/>
                    <path d="M19.806 20.6873C10.9676 15.6467 14.0701 6.70177 14.0701 6.70177L13.4256 6.60898C12.8843 11.2985 10.8254 16.2435 19.9533 21.7956C29.781 27.7734 33.3317 22.919 35.0555 21.4948L35.0405 20.8721C35.0405 20.8721 31.0535 27.1018 19.806 20.6873Z" fill="#81AF7D"/>
                    <rect width="1.26062" height="2.94146" rx="0.630312" transform="matrix(0.539867 -0.84175 -0.84175 -0.539867 24.5564 17.0362)" fill="#5C4310"/>
                    <rect width="1.26062" height="2.94146" rx="0.630312" transform="matrix(0.539867 -0.84175 -0.84175 -0.539867 24.5564 17.0362)" fill="#5C4310"/>
                    </svg>
                    
                }
                {type === SchmarrnType.Nuss &&
                    <svg width="37" height="42" viewBox="0 0 37 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="9.4178" width="28.6604" height="33.6593" rx="10" transform="rotate(-15 0 9.4178)" fill="#D3C590"/>
                    <rect x="4.89746" y="9.78279" width="24.8531" height="29.188" rx="10" transform="rotate(-15 4.89746 9.78279)" fill="#E0D098"/>
                    <circle cx="25.5" cy="15.4998" r="2.5" fill="#312F2A" stroke="#312F2A" stroke-width="2"/>
                    <circle cx="17.5" cy="17.4998" r="2.5" fill="#312F2A" stroke="#312F2A" stroke-width="2"/>
                    <path d="M19 22.9998C22 23.9998 26.5 22.9998 28 20.9998" stroke="#312F2A" stroke-width="2" stroke-linecap="round"/>
                    <rect y="9.4178" width="28.6604" height="33.6593" rx="10" transform="rotate(-15 0 9.4178)" fill="#D3C590"/>
                    <rect x="4.89746" y="9.78279" width="24.8531" height="29.188" rx="10" transform="rotate(-15 4.89746 9.78279)" fill="#E0D098"/>
                    <circle cx="25.5" cy="15.4998" r="2.5" fill="#312F2A" stroke="#312F2A" stroke-width="2"/>
                    <circle cx="17.5" cy="17.4998" r="2.5" fill="#312F2A" stroke="#312F2A" stroke-width="2"/>
                    <path d="M19 22.9998C22 23.9998 26.5 22.9998 28 20.9998" stroke="#312F2A" stroke-width="2" stroke-linecap="round"/>
                    <path d="M30.7885 5.47778C34.408 7.54771 30.9777 13.3184 24.5204 9.96925C20.9505 8.11765 19.2036 5.67862 18.4555 3.81373C18.1211 2.98003 17.9863 2.26107 17.9774 1.76065C21.2531 2.06863 27.8929 3.82184 30.7885 5.47778Z" fill="#AA863F"/>
                    <path d="M21 4.99994L22.5 5.99994M27 5.49994L29.5 6.49994M26 7.49994L27.5 8.49994M17.9774 1.76065C21.2531 2.06863 27.8929 3.82184 30.7885 5.47778C34.408 7.54771 30.9777 13.3184 24.5204 9.96925C20.9505 8.11765 19.2036 5.67862 18.4555 3.81373C18.1211 2.98003 17.9863 2.26107 17.9774 1.76065Z" stroke="#917133" stroke-linecap="round"/>
                    <path d="M3.99988 9.49994C4.74494 7.49538 12.4821 8.92126 11.5281 12.4764C11.0007 14.4418 9.06871 15.4976 7.34554 15.9999C6.57519 16.2245 5.84658 16.3385 5.30384 16.3738C4.26893 14.6556 3.40383 11.1036 3.99988 9.49994Z" fill="#85611C"/>
                    <path d="M7.34554 15.9999C6.57519 16.2245 5.84658 16.3385 5.30384 16.3738C4.26893 14.6556 3.40383 11.1036 3.99988 9.49994C4.74494 7.49538 12.4821 8.92126 11.5281 12.4764C11.0007 14.4418 9.06871 15.4976 7.34554 15.9999ZM7.34554 15.9999C5.99988 14.4999 6.49988 13.4999 6.99988 12.9999" stroke="#755415" stroke-linecap="round"/>
                    <path d="M14.6258 28.5773C14.8175 27.066 14.2808 24.2703 10.6004 25.177C8.64797 25.658 6.89824 26.3081 6.57502 28.0106C6.28897 29.5173 6.80996 31.48 6 32.5443C7.15016 32.5443 9.45037 36.5112 11.7506 35.9445C13.4758 35.3778 16.1594 34.2444 16.9262 31.9776C17.3862 30.6175 15.5843 28.9551 14.6258 28.5773Z" fill="#8B6B2C"/>
                    <path d="M10.6004 25.177L10.4808 24.6915L10.6004 25.177ZM14.6258 28.5773L14.1298 28.5143L14.0809 28.8999L14.4425 29.0424L14.6258 28.5773ZM16.9262 31.9776L17.3998 32.1378L16.9262 31.9776ZM6 32.5443L5.60212 32.2415L4.99116 33.0442L5.99999 33.0443L6 32.5443ZM6.57502 28.0106L7.06624 28.1038L6.57502 28.0106ZM11.7506 35.9445L11.8702 36.43L11.8886 36.4255L11.9067 36.4196L11.7506 35.9445ZM12.9818 29.6374C13.2543 29.5926 13.4389 29.3355 13.3941 29.063C13.3494 28.7905 13.0922 28.6059 12.8197 28.6506L12.9818 29.6374ZM8.99114 32.0443C8.71504 32.0492 8.49518 32.277 8.50008 32.5531C8.50497 32.8292 8.73277 33.0491 9.00886 33.0442L8.99114 32.0443ZM11.5 32.4999L11.5089 32.9999C11.6729 32.997 11.825 32.9138 11.916 32.7773L11.5 32.4999ZM12.5 30.9999L12.6581 30.5256C12.4442 30.4543 12.209 30.535 12.084 30.7226L12.5 30.9999ZM14 31.4999L13.8419 31.9743C14.0216 32.0342 14.2196 31.9874 14.3536 31.8535L14 31.4999ZM14.8536 31.3535C15.0488 31.1582 15.0488 30.8416 14.8536 30.6464C14.6583 30.4511 14.3417 30.4511 14.1464 30.6464L14.8536 31.3535ZM7.55279 28.7763C7.42929 29.0233 7.5294 29.3237 7.77639 29.4472C8.02338 29.5706 8.32372 29.4705 8.44721 29.2235L7.55279 28.7763ZM8.5 27.9999V27.4999C8.31061 27.4999 8.13748 27.6069 8.05279 27.7763L8.5 27.9999ZM10.5 27.9999V28.4999C10.7761 28.4999 11 28.2761 11 27.9999H10.5ZM10.5 26.9999L10.6213 26.5149C10.4719 26.4775 10.3137 26.5111 10.1923 26.6058C10.0709 26.7006 10 26.846 10 26.9999H10.5ZM12.3787 27.985C12.6466 28.052 12.9181 27.8891 12.9851 27.6212C13.052 27.3533 12.8892 27.0818 12.6213 27.0149L12.3787 27.985ZM10.7201 25.6625C11.5821 25.4501 12.2146 25.466 12.6742 25.5947C13.1261 25.7213 13.44 25.9647 13.6625 26.2669C14.1259 26.8962 14.2175 27.8231 14.1298 28.5143L15.1218 28.6402C15.2259 27.8202 15.1449 26.5936 14.4678 25.6739C14.12 25.2016 13.6217 24.8216 12.9439 24.6318C12.2738 24.4441 11.459 24.4505 10.4808 24.6915L10.7201 25.6625ZM14.4425 29.0424C14.8247 29.1931 15.4483 29.6425 15.9194 30.2238C16.4046 30.8226 16.5964 31.3919 16.4525 31.8173L17.3998 32.1378C17.7159 31.2031 17.2368 30.2612 16.6964 29.5943C16.1419 28.91 15.3853 28.3392 14.8092 28.1121L14.4425 29.0424ZM6.39788 32.8471C6.91442 32.1684 6.97727 31.2516 6.98396 30.4475C6.99119 29.5775 6.9344 28.7983 7.06624 28.1038L6.08379 27.9173C5.92959 28.7295 5.99026 29.6851 5.98399 30.4392C5.97717 31.2592 5.89554 31.8559 5.60212 32.2415L6.39788 32.8471ZM7.06624 28.1038C7.19439 27.4289 7.59885 26.9476 8.23502 26.5639C8.88761 26.1702 9.74954 25.9016 10.7201 25.6625L10.4808 24.6915C9.49888 24.9334 8.5097 25.2303 7.71851 25.7076C6.91089 26.1948 6.27887 26.8898 6.08379 27.9173L7.06624 28.1038ZM16.4525 31.8173C16.1189 32.8038 15.357 33.5747 14.4256 34.1792C13.4961 34.7824 12.441 35.1915 11.5946 35.4695L11.9067 36.4196C12.7854 36.1309 13.9347 35.6899 14.97 35.018C16.0034 34.3473 16.9667 33.4182 17.3998 32.1378L16.4525 31.8173ZM11.631 35.459C11.2168 35.5611 10.7707 35.4692 10.2757 35.2095C9.77749 34.9482 9.27691 34.5413 8.78157 34.0881C8.5356 33.863 8.29815 33.6333 8.06502 33.4092C7.83453 33.1875 7.60662 32.9697 7.39025 32.7796C7.17558 32.591 6.95662 32.4158 6.7418 32.2858C6.53471 32.1605 6.27862 32.0443 6.00001 32.0443L5.99999 33.0443C6.00892 33.0443 6.07631 33.052 6.22415 33.1414C6.36425 33.2262 6.53166 33.3564 6.73032 33.5309C6.92728 33.7039 7.13965 33.9067 7.3719 34.13C7.60152 34.3508 7.84928 34.5904 8.10648 34.8258C8.61749 35.2934 9.19514 35.772 9.81115 36.0951C10.4303 36.4199 11.1343 36.6113 11.8702 36.43L11.631 35.459ZM6.31732 32.9307C6.86829 32.4782 7.87741 31.7591 9.08624 31.0988C10.2987 30.4365 11.68 29.8512 12.9818 29.6374L12.8197 28.6506C11.3611 28.8902 9.86718 29.5328 8.60687 30.2212C7.34293 30.9115 6.28183 31.6658 5.68268 32.1579L6.31732 32.9307ZM9.00886 33.0442L11.5089 32.9999L11.4911 32L8.99114 32.0443L9.00886 33.0442ZM11.916 32.7773L12.916 31.2773L12.084 30.7226L11.084 32.2226L11.916 32.7773ZM12.3419 31.4743L13.8419 31.9743L14.1581 31.0256L12.6581 30.5256L12.3419 31.4743ZM14.3536 31.8535L14.8536 31.3535L14.1464 30.6464L13.6464 31.1464L14.3536 31.8535ZM8.44721 29.2235L8.94721 28.2235L8.05279 27.7763L7.55279 28.7763L8.44721 29.2235ZM8.5 28.4999H10.5V27.4999H8.5V28.4999ZM11 27.9999V26.9999H10V27.9999H11ZM10.3787 27.485L12.3787 27.985L12.6213 27.0149L10.6213 26.5149L10.3787 27.485Z" fill="#7C5E24"/>
                    </svg>  
                }
                {type === SchmarrnType.Sahne &&
                    <svg width="39" height="47" viewBox="0 0 39 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="9.41791" width="28.6604" height="33.6593" rx="10" transform="rotate(-15 0 9.41791)" fill="#745D3A"/>
                    <rect x="4.89746" y="9.7829" width="24.8531" height="29.188" rx="10" transform="rotate(-15 4.89746 9.7829)" fill="#F9EEC9"/>
                    <circle cx="25.5" cy="15.4999" r="2.5" fill="#312F2A" stroke="#312F2A" stroke-width="2"/>
                    <circle cx="17.5" cy="17.4999" r="2.5" fill="#312F2A" stroke="#312F2A" stroke-width="2"/>
                    <path d="M19 22.9999C22 23.9999 26.5 22.9999 28 20.9999" stroke="#312F2A" stroke-width="2" stroke-linecap="round"/>
                    <path d="M13.2154 36.3455L35.7866 30.4743L35.9981 31.2874C37.066 35.3927 35.4591 39.8027 31.6527 41.6751C30.1043 42.4369 28.4658 43.1254 27.0001 43.5001C25.6 43.858 23.9187 44.0416 22.2702 44.125C18.04 44.3391 14.4965 41.2704 13.4302 37.1713L13.2154 36.3455Z" fill="#378097"/>
                    <path d="M35.9265 31.516C36.0039 31.9359 35.8634 32.4364 35.4144 33.0112C34.966 33.5854 34.2452 34.1842 33.2813 34.7634C31.3569 35.92 28.558 36.9424 25.3426 37.5353C22.1272 38.1283 19.1478 38.1715 16.9375 37.7775C15.8303 37.5802 14.9434 37.2779 14.3196 36.9014C13.6951 36.5246 13.3853 36.1072 13.3079 35.6873C13.2305 35.2674 13.371 34.767 13.82 34.1922C14.2684 33.618 14.9892 33.0192 15.9531 32.4399C17.8775 31.2834 20.6764 30.261 23.8918 29.668C27.1072 29.075 30.0865 29.0318 32.2969 29.4258C33.4041 29.6232 34.291 29.9255 34.9148 30.3019C35.5393 30.6788 35.8491 31.0961 35.9265 31.516Z" fill="white"/>
                    <path d="M35.9265 31.516C36.0039 31.9359 35.8634 32.4364 35.4144 33.0112C34.966 33.5854 34.2452 34.1842 33.2813 34.7634C31.3569 35.92 28.558 36.9424 25.3426 37.5353C22.1272 38.1283 19.1478 38.1715 16.9375 37.7775C15.8303 37.5802 14.9434 37.2779 14.3196 36.9014C13.6951 36.5246 13.3853 36.1072 13.3079 35.6873C13.2305 35.2674 13.371 34.767 13.82 34.1922C14.2684 33.618 14.9892 33.0192 15.9531 32.4399C17.8775 31.2834 20.6764 30.261 23.8918 29.668C27.1072 29.075 30.0865 29.0318 32.2969 29.4258C33.4041 29.6232 34.291 29.9255 34.9148 30.3019C35.5393 30.6788 35.8491 31.0961 35.9265 31.516Z" stroke="#E2E2E2"/>
                    <path d="M35.9265 31.516C36.0039 31.9359 35.8634 32.4364 35.4144 33.0112C34.966 33.5854 34.2452 34.1842 33.2813 34.7634C31.3569 35.92 28.558 36.9424 25.3426 37.5353C22.1272 38.1283 19.1478 38.1715 16.9375 37.7775C15.8303 37.5802 14.9434 37.2779 14.3196 36.9014C13.6951 36.5246 13.3853 36.1072 13.3079 35.6873C13.2305 35.2674 13.371 34.767 13.82 34.1922C14.2684 33.618 14.9892 33.0192 15.9531 32.4399C17.8775 31.2834 20.6764 30.261 23.8918 29.668C27.1072 29.075 30.0865 29.0318 32.2969 29.4258C33.4041 29.6232 34.291 29.9255 34.9148 30.3019C35.5393 30.6788 35.8491 31.0961 35.9265 31.516Z" stroke="#E2E2E2"/>
                    <path d="M33.9937 32.5389C34.0597 32.8196 33.9781 33.1753 33.6259 33.6037C33.2755 34.0301 32.6975 34.4746 31.9099 34.9015C30.3384 35.7532 28.0286 36.483 25.3539 36.8695C22.6793 37.256 20.1892 37.2198 18.3334 36.8633C17.4031 36.6846 16.6609 36.4308 16.1394 36.1305C15.6153 35.8287 15.3771 35.5192 15.3111 35.2385C15.245 34.9579 15.3267 34.6022 15.6788 34.1737C16.0293 33.7474 16.6072 33.3028 17.3949 32.8759C18.9663 32.0242 21.2761 31.2945 23.9508 30.908C26.6254 30.5215 29.1155 30.5577 30.9714 30.9142C31.9016 31.0928 32.6439 31.3466 33.1653 31.647C33.6894 31.9488 33.9276 32.2583 33.9937 32.5389Z" fill="white"/>
                    <path d="M33.9937 32.5389C34.0597 32.8196 33.9781 33.1753 33.6259 33.6037C33.2755 34.0301 32.6975 34.4746 31.9099 34.9015C30.3384 35.7532 28.0286 36.483 25.3539 36.8695C22.6793 37.256 20.1892 37.2198 18.3334 36.8633C17.4031 36.6846 16.6609 36.4308 16.1394 36.1305C15.6153 35.8287 15.3771 35.5192 15.3111 35.2385C15.245 34.9579 15.3267 34.6022 15.6788 34.1737C16.0293 33.7474 16.6072 33.3028 17.3949 32.8759C18.9663 32.0242 21.2761 31.2945 23.9508 30.908C26.6254 30.5215 29.1155 30.5577 30.9714 30.9142C31.9016 31.0928 32.6439 31.3466 33.1653 31.647C33.6894 31.9488 33.9276 32.2583 33.9937 32.5389Z" stroke="#E2E2E2"/>
                    <path d="M33.9937 32.5389C34.0597 32.8196 33.9781 33.1753 33.6259 33.6037C33.2755 34.0301 32.6975 34.4746 31.9099 34.9015C30.3384 35.7532 28.0286 36.483 25.3539 36.8695C22.6793 37.256 20.1892 37.2198 18.3334 36.8633C17.4031 36.6846 16.6609 36.4308 16.1394 36.1305C15.6153 35.8287 15.3771 35.5192 15.3111 35.2385C15.245 34.9579 15.3267 34.6022 15.6788 34.1737C16.0293 33.7474 16.6072 33.3028 17.3949 32.8759C18.9663 32.0242 21.2761 31.2945 23.9508 30.908C26.6254 30.5215 29.1155 30.5577 30.9714 30.9142C31.9016 31.0928 32.6439 31.3466 33.1653 31.647C33.6894 31.9488 33.9276 32.2583 33.9937 32.5389Z" stroke="#E2E2E2"/>
                    <path d="M31.8994 31.6991C31.9354 31.8522 31.8949 32.086 31.6164 32.4047C31.3417 32.719 30.8847 33.0544 30.254 33.3813C28.9971 34.0327 27.1494 34.5991 25.0103 34.9082C22.8711 35.2173 20.8871 35.2046 19.4164 34.9473C18.6783 34.8182 18.0987 34.6325 17.699 34.4157C17.2937 34.1959 17.1494 33.9887 17.1134 33.8356C17.0773 33.6825 17.1179 33.4487 17.3964 33.13C17.6711 32.8158 18.128 32.4803 18.7588 32.1534C20.0157 31.502 21.8634 30.9356 24.0025 30.6265C26.1416 30.3174 28.1256 30.3302 29.5964 30.5874C30.3345 30.7165 30.9141 30.9022 31.3138 31.119C31.719 31.3389 31.8634 31.546 31.8994 31.6991Z" fill="white"/>
                    <path d="M31.8994 31.6991C31.9354 31.8522 31.8949 32.086 31.6164 32.4047C31.3417 32.719 30.8847 33.0544 30.254 33.3813C28.9971 34.0327 27.1494 34.5991 25.0103 34.9082C22.8711 35.2173 20.8871 35.2046 19.4164 34.9473C18.6783 34.8182 18.0987 34.6325 17.699 34.4157C17.2937 34.1959 17.1494 33.9887 17.1134 33.8356C17.0773 33.6825 17.1179 33.4487 17.3964 33.13C17.6711 32.8158 18.128 32.4803 18.7588 32.1534C20.0157 31.502 21.8634 30.9356 24.0025 30.6265C26.1416 30.3174 28.1256 30.3302 29.5964 30.5874C30.3345 30.7165 30.9141 30.9022 31.3138 31.119C31.719 31.3389 31.8634 31.546 31.8994 31.6991Z" stroke="#E2E2E2"/>
                    <path d="M31.8994 31.6991C31.9354 31.8522 31.8949 32.086 31.6164 32.4047C31.3417 32.719 30.8847 33.0544 30.254 33.3813C28.9971 34.0327 27.1494 34.5991 25.0103 34.9082C22.8711 35.2173 20.8871 35.2046 19.4164 34.9473C18.6783 34.8182 18.0987 34.6325 17.699 34.4157C17.2937 34.1959 17.1494 33.9887 17.1134 33.8356C17.0773 33.6825 17.1179 33.4487 17.3964 33.13C17.6711 32.8158 18.128 32.4803 18.7588 32.1534C20.0157 31.502 21.8634 30.9356 24.0025 30.6265C26.1416 30.3174 28.1256 30.3302 29.5964 30.5874C30.3345 30.7165 30.9141 30.9022 31.3138 31.119C31.719 31.3389 31.8634 31.546 31.8994 31.6991Z" stroke="#E2E2E2"/>
                    <path d="M28.7682 32.0341C28.7835 32.099 28.7779 32.2227 28.629 32.415C28.4804 32.6069 28.2213 32.8208 27.8453 33.0336C27.0964 33.4574 25.9761 33.8249 24.6626 34.0147C23.349 34.2046 22.1351 34.1743 21.2426 33.9877C20.7944 33.894 20.4549 33.7665 20.2287 33.6288C20.0021 33.4908 19.9406 33.3768 19.9253 33.3119C19.91 33.247 19.9156 33.1233 20.0645 32.9311C20.2131 32.7392 20.4722 32.5252 20.8483 32.3124C21.5971 31.8886 22.7174 31.5211 24.031 31.3313C25.3445 31.1415 26.5584 31.1717 27.451 31.3583C27.8991 31.4521 28.2386 31.5795 28.4648 31.7172C28.6914 31.8552 28.753 31.9692 28.7682 32.0341Z" fill="white"/>
                    <path d="M28.7682 32.0341C28.7835 32.099 28.7779 32.2227 28.629 32.415C28.4804 32.6069 28.2213 32.8208 27.8453 33.0336C27.0964 33.4574 25.9761 33.8249 24.6626 34.0147C23.349 34.2046 22.1351 34.1743 21.2426 33.9877C20.7944 33.894 20.4549 33.7665 20.2287 33.6288C20.0021 33.4908 19.9406 33.3768 19.9253 33.3119C19.91 33.247 19.9156 33.1233 20.0645 32.9311C20.2131 32.7392 20.4722 32.5252 20.8483 32.3124C21.5971 31.8886 22.7174 31.5211 24.031 31.3313C25.3445 31.1415 26.5584 31.1717 27.451 31.3583C27.8991 31.4521 28.2386 31.5795 28.4648 31.7172C28.6914 31.8552 28.753 31.9692 28.7682 32.0341Z" stroke="#E2E2E2"/>
                    <path d="M28.7682 32.0341C28.7835 32.099 28.7779 32.2227 28.629 32.415C28.4804 32.6069 28.2213 32.8208 27.8453 33.0336C27.0964 33.4574 25.9761 33.8249 24.6626 34.0147C23.349 34.2046 22.1351 34.1743 21.2426 33.9877C20.7944 33.894 20.4549 33.7665 20.2287 33.6288C20.0021 33.4908 19.9406 33.3768 19.9253 33.3119C19.91 33.247 19.9156 33.1233 20.0645 32.9311C20.2131 32.7392 20.4722 32.5252 20.8483 32.3124C21.5971 31.8886 22.7174 31.5211 24.031 31.3313C25.3445 31.1415 26.5584 31.1717 27.451 31.3583C27.8991 31.4521 28.2386 31.5795 28.4648 31.7172C28.6914 31.8552 28.753 31.9692 28.7682 32.0341Z" stroke="#E2E2E2"/>
                    <path d="M22.0569 31.7178C21.6722 30.1451 23.3392 28.3104 23.9804 26.9999C23.5957 27.7862 23.9804 30.9314 25.1344 30.9314C26.2885 30.9314 26.2885 32.5041 25.1345 32.8972C23.9804 33.2904 22.2436 32.4806 22.0569 31.7178Z" fill="white"/>
                    <path d="M24.4295 27.2196C24.5509 26.9716 24.4482 26.6721 24.2001 26.5508C23.9521 26.4294 23.6526 26.5321 23.5313 26.7802L24.4295 27.2196ZM22.0569 31.7178L22.5426 31.5989L22.0569 31.7178ZM25.1345 32.8972L24.9732 32.4239H24.9732L25.1345 32.8972ZM23.5313 26.7802C23.3849 27.0794 23.1754 27.417 22.9325 27.8019C22.695 28.1781 22.429 28.5942 22.1955 29.0203C21.7406 29.8505 21.3304 30.852 21.5713 31.8366L22.5426 31.5989C22.3988 31.0109 22.6298 30.3087 23.0725 29.5008C23.2878 29.1078 23.5347 28.7212 23.7781 28.3357C24.016 27.9588 24.2553 27.5757 24.4295 27.2196L23.5313 26.7802ZM21.5713 31.8366C21.6532 32.1714 21.8838 32.4493 22.1293 32.6592C22.3835 32.8765 22.7017 33.0625 23.042 33.2031C23.7078 33.4782 24.5626 33.6203 25.2957 33.3705L24.9732 32.4239C24.5523 32.5673 23.9616 32.5011 23.4238 32.2789C23.1623 32.1708 22.9392 32.0359 22.7791 31.8991C22.6105 31.7549 22.554 31.6455 22.5426 31.5989L21.5713 31.8366ZM25.2957 33.3705C26.0774 33.1042 26.5 32.4209 26.5 31.7669C26.5 31.4393 26.3926 31.1013 26.148 30.841C25.8977 30.5745 25.5431 30.4314 25.1344 30.4314V31.4314C25.3028 31.4314 25.381 31.485 25.4192 31.5256C25.4631 31.5724 25.5 31.6523 25.5 31.7669C25.5 31.9975 25.3455 32.2971 24.9732 32.4239L25.2957 33.3705ZM25.1344 30.4314C25.1017 30.4314 24.9933 30.4121 24.8369 30.1624C24.6872 29.9234 24.5589 29.5678 24.469 29.1543C24.3803 28.7466 24.3361 28.3153 24.3361 27.9459C24.3361 27.553 24.3866 27.3074 24.4295 27.2196L23.5313 26.7802C23.3818 27.0856 23.3361 27.528 23.3361 27.9459C23.3361 28.3874 23.3881 28.8899 23.4918 29.3668C23.5942 29.8379 23.7543 30.3178 23.9894 30.6931C24.2176 31.0576 24.5901 31.4314 25.1344 31.4314V30.4314Z" fill="#E2E2E2"/>
                    <path d="M20.8221 3.40976C20.0606 1.95221 17.2886 2.10845 15.7979 1.73778C16.6923 1.96018 18.5579 4.53763 17.5306 5.55036C16.5032 6.56308 17.6072 7.68306 18.9106 6.95032C20.2139 6.21759 21.1915 4.11678 20.8221 3.40976Z" fill="white"/>
                    <path d="M15.6772 2.22301C15.4092 2.15638 15.246 1.88512 15.3126 1.61713C15.3793 1.34915 15.6505 1.18592 15.9185 1.25256L15.6772 2.22301ZM20.8221 3.40976L20.379 3.6413L20.8221 3.40976ZM18.9106 6.95032L19.1556 7.38617L18.9106 6.95032ZM15.9185 1.25256C16.2572 1.33677 16.6797 1.39334 17.1668 1.45431C17.6421 1.5138 18.1713 1.5767 18.6789 1.67538C19.6532 1.86481 20.7653 2.22125 21.2653 3.17822L20.379 3.6413C20.1174 3.14072 19.4628 2.84651 18.488 2.657C18.0211 2.56621 17.5302 2.50758 17.0426 2.44657C16.5669 2.38703 16.0839 2.32413 15.6772 2.22301L15.9185 1.25256ZM21.2653 3.17822C21.4373 3.50749 21.4203 3.91073 21.3533 4.25397C21.2823 4.61808 21.1352 5.01455 20.9387 5.39832C20.5509 6.15549 19.9221 6.95527 19.1556 7.38617L18.6655 6.51448C19.2024 6.21264 19.7141 5.59564 20.0486 4.94248C20.2132 4.62108 20.3228 4.31399 20.3718 4.06244C20.425 3.79004 20.3917 3.66554 20.379 3.6413L21.2653 3.17822ZM19.1556 7.38617C18.3645 7.8309 17.5011 7.77386 16.9905 7.25589C16.7353 6.99699 16.5977 6.64186 16.6314 6.25589C16.6647 5.87497 16.8593 5.50999 17.1796 5.19428L17.8816 5.90643C17.6882 6.09709 17.6356 6.25187 17.6276 6.34288C17.6201 6.42884 17.6474 6.4978 17.7027 6.55388C17.8131 6.6659 18.1533 6.80248 18.6655 6.51448L19.1556 7.38617ZM17.1796 5.19428C17.2908 5.08467 17.3559 4.90912 17.3223 4.6156C17.2881 4.3174 17.1551 3.95871 16.9492 3.59303C16.7456 3.2314 16.4872 2.89242 16.2343 2.63592C15.9635 2.36121 15.7607 2.24376 15.6772 2.22301L15.9185 1.25256C16.2823 1.34301 16.648 1.63113 16.9465 1.93389C17.2629 2.25487 17.5744 2.66525 17.8206 3.10236C18.0644 3.53544 18.2611 4.0249 18.3158 4.50175C18.371 4.98328 18.2841 5.50968 17.8816 5.90643L17.1796 5.19428Z" fill="#E2E2E2"/>
                    <path d="M6.0724 24.7792C4.69684 23.8779 5.12506 21.1347 4.90287 19.6147C5.03618 20.5267 7.41757 22.6369 8.52646 21.7142C9.63535 20.7915 10.6413 22.0003 9.78386 23.2252C8.92644 24.4501 6.73963 25.2163 6.0724 24.7792Z" fill="white"/>
                    <path d="M5.39761 19.5424C5.35767 19.2692 5.10378 19.0801 4.83054 19.12C4.55731 19.1599 4.36818 19.4138 4.40812 19.6871L5.39761 19.5424ZM6.0724 24.7792L6.34642 24.3609L6.0724 24.7792ZM9.78386 23.2252L10.1935 23.5119L9.78386 23.2252ZM4.40812 19.6871C4.4586 20.0324 4.47333 20.4584 4.48607 20.9492C4.49851 21.428 4.50904 21.9608 4.5573 22.4756C4.64995 23.4639 4.89524 24.6057 5.79838 25.1974L6.34642 24.3609C5.87399 24.0514 5.64562 23.371 5.55294 22.3823C5.50854 21.9087 5.49849 21.4144 5.48574 20.9232C5.47329 20.4439 5.45822 19.9571 5.39761 19.5424L4.40812 19.6871ZM5.79838 25.1974C6.10912 25.401 6.51207 25.4237 6.86024 25.3908C7.22957 25.3559 7.63859 25.2486 8.03984 25.0908C8.83149 24.7794 9.68925 24.2323 10.1935 23.5119L9.37423 22.9385C9.02104 23.4431 8.35669 23.8916 7.67378 24.1602C7.33774 24.2924 7.02136 24.3712 6.76621 24.3953C6.4899 24.4214 6.36929 24.3759 6.34642 24.3609L5.79838 25.1974ZM10.1935 23.5119C10.7139 22.7685 10.7421 21.9036 10.2769 21.3445C10.0443 21.0651 9.70445 20.8932 9.31703 20.8888C8.93469 20.8844 8.55233 21.0422 8.20664 21.3298L8.84627 22.0985C9.05503 21.9248 9.21424 21.8877 9.30559 21.8887C9.39187 21.8897 9.45781 21.9236 9.50819 21.9842C9.6088 22.1051 9.71125 22.457 9.37423 22.9385L10.1935 23.5119ZM8.20664 21.3298C8.08663 21.4297 7.90551 21.4773 7.61673 21.4149C7.32334 21.3516 6.97948 21.184 6.63583 20.9431C6.29599 20.7048 5.98408 20.4143 5.7537 20.1375C5.50697 19.841 5.41005 19.6275 5.39761 19.5424L4.40812 19.6871C4.46234 20.058 4.71309 20.4503 4.98501 20.7771C5.2733 21.1236 5.65104 21.4739 6.06181 21.7619C6.46879 22.0472 6.93652 22.2911 7.40569 22.3924C7.87945 22.4947 8.41184 22.46 8.84627 22.0985L8.20664 21.3298Z" fill="#E2E2E2"/>
                    </svg>                    
                }
            </button>
    )
}