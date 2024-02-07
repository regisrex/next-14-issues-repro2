export interface INavLink {
    label: string;
    href?: string;
    Icon: React.FC;
    subLinks?: INavLink[];
}

export const navLinks: INavLink[] = [
    {
        Icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 6C9.01664 6 7.5666 6.43987 6.33323 7.26398C5.09986 8.08809 4.13856 9.25943 3.57091 10.6299C3.00325 12.0003 2.85472 13.5083 3.14411 14.9632C3.4335 16.418 4.14781 17.7544 5.1967 18.8033C6.2456 19.8522 7.58197 20.5665 9.03683 20.8559C10.4917 21.1453 11.9997 20.9968 13.3701 20.4291C14.7406 19.8614 15.9119 18.9001 16.736 17.6668C17.5601 16.4334 18 14.9834 18 13.5H10.5V6Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.5 10.5H21C21 8.51088 20.2098 6.60322 18.8033 5.1967C17.3968 3.79018 15.4891 3 13.5 3V10.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        label: "Analytics",
        href: "/p/analytics"
    },
    {
        Icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20.816V6.42632M12 20.816C12 21.2581 11.4583 21.4918 11.1127 21.216C8.89839 19.4485 6.40868 18.8126 3.51736 18.8351C3.23465 18.8373 3 18.6115 3 18.3288V3.52996C3 3.27217 3.1965 3.05572 3.45367 3.03789C6.8135 2.80498 9.49853 3.62458 11.8641 6.08583C11.9518 6.17707 12 6.29978 12 6.42632M12 20.816C12 21.2581 12.5417 21.4918 12.8873 21.216C15.1016 19.4485 17.5913 18.8126 20.4826 18.8351C20.7653 18.8373 21 18.6115 21 18.3288V3.52996C21 3.27217 20.8035 3.05572 20.5463 3.03789C17.1865 2.80498 14.5015 3.62458 12.1359 6.08583C12.0482 6.17707 12 6.29978 12 6.42632M19 12.0072C17.0487 11.9327 15.1657 12.6066 14.0004 13.5908M19 14.7972C17.0487 14.7227 15.4219 15.2169 14 16.79M9.5 10.2484V7.79178C9.5 7.65599 9.44501 7.52529 9.34516 7.43326C8.31904 6.48746 7.33947 6.02782 5.97639 6.00123C5.70969 5.99602 5.5 6.21832 5.5 6.48507V9.06271C5.5 9.34219 5.73021 9.56425 6.0074 9.59994C6.86639 9.71052 7.6808 10.1268 8.35119 10.6873C8.73706 11.01 9.5 10.7514 9.5 10.2484Z" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" />
        </svg>,
        label: "Newsletter",
        href: "/p/newsletter"
    },
    {
        Icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8754 8.68583V17.9999C19.8754 19.6568 18.5323 20.9999 16.8754 20.9999H7.12463C5.46778 20.9999 4.12463 19.6568 4.12463 17.9999V5.99902C4.12463 4.34217 5.46778 2.99902 7.12463 2.99902H14.1378M8.50012 10.9991H15.5001M8.50012 13.9991H15.5001M8.50012 16.9991H11.5001M14.2501 2.99951L19.8754 8.49974H16.2501C15.1456 8.49974 14.2501 7.60431 14.2501 6.49974V2.99951Z" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        label: "Blog",
        href: "/p/blog"
    },
    {
        Icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.25 14.15V18.4C20.25 19.494 19.463 20.436 18.378 20.58C16.291 20.857 14.162 21 12 21C9.83799 21 7.70899 20.857 5.62199 20.58C4.53699 20.436 3.74999 19.494 3.74999 18.4V14.15M20.25 14.15C20.4875 13.9436 20.6774 13.6883 20.8069 13.4016C20.9364 13.1149 21.0022 12.8036 21 12.489V8.706C21 7.625 20.232 6.691 19.163 6.531C18.0303 6.36142 16.8919 6.23234 15.75 6.144M20.25 14.15C20.056 14.315 19.83 14.445 19.577 14.53C17.1332 15.3408 14.5748 15.7528 12 15.75C9.35199 15.75 6.80499 15.321 4.42299 14.53C4.17625 14.4479 3.94772 14.3189 3.74999 14.15M3.74999 14.15C3.51254 13.9436 3.32256 13.6883 3.19309 13.4016C3.06363 13.1149 2.99776 12.8036 2.99999 12.489V8.706C2.99999 7.625 3.76799 6.691 4.83699 6.531C5.96969 6.36142 7.10808 6.23233 8.24999 6.144M15.75 6.144V5.25C15.75 4.65326 15.5129 4.08097 15.091 3.65901C14.669 3.23705 14.0967 3 13.5 3H10.5C9.90326 3 9.33096 3.23705 8.909 3.65901C8.48705 4.08097 8.24999 4.65326 8.24999 5.25V6.144M15.75 6.144C13.2537 5.95108 10.7463 5.95108 8.24999 6.144M12 12.75H12.008V12.758H12V12.75Z" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        label: "Careers",
        href: "/p/careers"
    },
    {
        Icon: () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9.25" stroke="white" stroke-opacity="0.8" stroke-width="1.5" />
            <mask id="path-2-inside-1_639_1828" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48058 0.114695C7.74676 1.3 6.70008 3.11852 9.74187 4.28843C13.6632 5.79662 13.6598 7.66016 13.655 10.2382C13.6549 10.3285 13.6547 10.4197 13.6547 10.5117C13.6547 12.9984 15.1414 15.4385 19.5032 13.1215C19.8256 12.1394 20 11.09 20 10C20 4.47715 15.5229 0 10 0C9.48346 0 8.97604 0.0391676 8.48058 0.114695Z" />
            </mask>
            <path d="M9.74187 4.28843L10.2803 2.88842L9.74187 4.28843ZM8.48058 0.114695L8.25453 -1.36817L7.5698 -1.2638L7.20521 -0.674883L8.48058 0.114695ZM13.655 10.2382L12.155 10.2355V10.2355L13.655 10.2382ZM19.5032 13.1215L20.2069 14.4462L20.74 14.163L20.9284 13.5894L19.5032 13.1215ZM10.2803 2.88842C9.65373 2.64741 9.38093 2.42557 9.27331 2.30599C9.19279 2.21652 9.19534 2.17951 9.19441 2.15365C9.19199 2.08603 9.21084 1.94336 9.31699 1.69801C9.42264 1.45382 9.57229 1.20093 9.75595 0.904273L7.20521 -0.674883C6.88541 -0.158335 6.15048 0.980916 6.19633 2.26103C6.22223 2.98419 6.48758 3.69525 7.04338 4.31284C7.57208 4.90031 8.30911 5.3445 9.2034 5.68845L10.2803 2.88842ZM15.155 10.241C15.1572 9.03869 15.1895 7.54461 14.5121 6.19088C13.789 4.74574 12.4192 3.71107 10.2803 2.88842L9.2034 5.68845C10.9858 6.37398 11.575 7.02518 11.8293 7.53337C12.1293 8.13298 12.1576 8.85971 12.155 10.2355L15.155 10.241ZM15.1547 10.5117C15.1547 10.4213 15.1549 10.3315 15.155 10.241L12.155 10.2355C12.1549 10.3256 12.1547 10.4181 12.1547 10.5117H15.1547ZM18.7995 11.7968C16.805 12.8563 16.0201 12.5382 15.7939 12.3825C15.4786 12.1654 15.1547 11.5585 15.1547 10.5117H12.1547C12.1547 11.9516 12.5741 13.8081 14.0927 14.8535C15.7002 15.9602 17.8396 15.7037 20.2069 14.4462L18.7995 11.7968ZM18.5 10C18.5 10.9291 18.3515 11.8206 18.078 12.6537L20.9284 13.5894C21.2997 12.4581 21.5 11.2509 21.5 10H18.5ZM10 1.5C14.6944 1.5 18.5 5.30558 18.5 10H21.5C21.5 3.64873 16.3513 -1.5 10 -1.5V1.5ZM8.70662 1.59756C9.12753 1.5334 9.55939 1.5 10 1.5V-1.5C9.40752 -1.5 8.82455 -1.45507 8.25453 -1.36817L8.70662 1.59756Z" fill="white" fill-opacity="0.8" mask="url(#path-2-inside-1_639_1828)" />
            <path d="M10.018 15.6901C11.6003 16.0731 12.4636 17.7365 11.8803 19.0593C11.2737 19.1845 10.6449 19.2504 10 19.2504C4.89137 19.2504 0.75 15.109 0.75 10.0004C0.75 9.07652 0.88522 8.18509 1.13678 7.34433C1.27743 7.51374 1.43608 7.67459 1.61445 7.82037C2.35937 8.42921 3.38174 8.71789 4.65147 8.37356C5.92066 8.02937 6.64142 8.33401 7.05713 8.76379C7.51701 9.23922 7.75561 10.0237 7.72326 10.8649C7.71226 11.1509 7.6897 11.4301 7.66656 11.7151C7.66419 11.7443 7.66177 11.7738 7.65932 11.8036C7.60274 12.4928 7.53478 13.3205 7.80838 14.0289C8.1368 14.8791 8.87049 15.4122 10.018 15.6901Z" stroke="white" stroke-opacity="0.8" stroke-width="1.5" />
        </svg>,
        label: "Website",
        subLinks: [
            {
                Icon: () => <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.25 9.18157V15.5C17.25 17.2949 15.7949 18.75 14 18.75H11H7H4C2.20507 18.75 0.75 17.2949 0.75 15.5V9.18157C0.75 8.1518 1.23803 7.18296 2.06551 6.57001L7.66074 2.4254C8.45633 1.83607 9.54367 1.83607 10.3393 2.4254L15.9345 6.57001C16.762 7.18296 17.25 8.1518 17.25 9.18157Z" stroke="white" stroke-width="1.5" />
                    <path d="M7 14.5H11" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                </svg>,
                label: "Homepage",
                href: "/p/website/homepage"
            },

            {
                Icon: () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5C1 2.79086 2.79086 1 5 1H15C17.2091 1 19 2.79086 19 5V15C19 17.2091 17.2091 19 15 19H5C2.79086 19 1 17.2091 1 15V5Z" stroke="white" stroke-width="1.5" />
                    <path d="M10 10V14" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M10.5 7C10.5 7.27614 10.2761 7.5 10 7.5C9.72386 7.5 9.5 7.27614 9.5 7C9.5 6.72386 9.72386 6.5 10 6.5C10.2761 6.5 10.5 6.72386 10.5 7Z" fill="black" stroke="white" />
                </svg>,
                label: "About",
                href: "/p/website/about"
            },
            {
                Icon: () => <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.85536 15.842L4.85474 15.9976C4.84769 17.7918 6.30019 19.25 8.09438 19.25C9.87862 19.25 11.327 17.8073 11.334 16.0231L11.3347 15.842M4.85536 15.842C4.85536 14.5938 4.1012 13.499 3.18834 12.6478C1.83975 11.3903 1 9.61968 1 7.65806C1 3.84284 4.17656 0.75 8.09504 0.75C12.0135 0.75 15.1901 3.84284 15.1901 7.65806C15.1901 9.61968 14.3503 11.3903 13.0017 12.6478C12.0889 13.499 11.3347 14.5938 11.3347 15.842M4.85536 15.842H11.3347M6.40729 10.8858L7.30294 12.0488C7.70319 12.5685 8.487 12.5686 8.88737 12.0489L9.78355 10.8858" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>,
                label: "Services",
                href: "/p/website/services"
            },
            {
                Icon: () => <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="18" height="14" rx="3" stroke="white" stroke-width="1.5" />
                    <path d="M1 4L8.8906 9.2604C9.5624 9.70827 10.4376 9.70827 11.1094 9.2604L19 4" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M12.5 8.5L18 13" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M7.5 8.5L2 13" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                </svg>,
                label: "Contacts",
                href: "/p/website/contacts"
            },

        ]
    },
]