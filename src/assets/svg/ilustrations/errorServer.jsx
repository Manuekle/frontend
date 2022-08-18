/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function errorServer(props) {
  return (
    <svg width="20rem" height="20rem" viewBox="0 0 700 700" {...props}>
      <defs>
        <symbol id="a" overflow="visible">
          <path d="M18.766-1.125c-.969.5-1.98.875-3.031 1.125-1.043.258-2.137.39-3.281.39-3.399 0-6.09-.945-8.079-2.843-1.992-1.906-2.984-4.485-2.984-7.735 0-3.257.992-5.835 2.984-7.734 1.989-1.906 4.68-2.86 8.079-2.86 1.144 0 2.238.133 3.28.391 1.052.25 2.063.625 3.032 1.125v4.219c-.98-.656-1.945-1.14-2.89-1.453a9.532 9.532 0 00-3-.469c-1.876 0-3.352.606-4.423 1.813-1.074 1.199-1.609 2.855-1.609 4.968 0 2.106.535 3.762 1.61 4.97C9.523-4.02 11-3.423 12.874-3.423c1.051 0 2.051-.148 3-.453.946-.312 1.91-.8 2.891-1.469z" />
        </symbol>
        <symbol id="b" overflow="visible">
          <path d="M13.734-11.141a6.765 6.765 0 00-1.297-.438 5.346 5.346 0 00-1.265-.156c-1.262 0-2.231.406-2.907 1.219-.68.805-1.015 1.953-1.015 3.453V0H2.36v-15.312h4.89v2.515c.625-1 1.344-1.726 2.156-2.187.82-.469 1.8-.703 2.937-.703.164 0 .344.011.532.03.195.013.476.04.843.079z" />
        </symbol>
        <symbol id="c" overflow="visible">
          <path d="M17.641-7.703v1.406H6.188c.125 1.148.54 2.008 1.25 2.578.707.574 1.703.86 2.984.86a11.52 11.52 0 003.157-.454 16.707 16.707 0 003.328-1.39v3.765a20.629 20.629 0 01-3.47.985A18.006 18.006 0 019.97.39C7.196.39 5.04-.313 3.5-1.72 1.97-3.125 1.203-5.098 1.203-7.64c0-2.5.754-4.46 2.266-5.89 1.508-1.438 3.582-2.157 6.219-2.157 2.406 0 4.332.731 5.781 2.188 1.445 1.45 2.172 3.383 2.172 5.797zM12.61-9.328c0-.926-.274-1.672-.813-2.234-.543-.57-1.25-.86-2.125-.86-.949 0-1.719.266-2.312.797s-.965 1.297-1.11 2.297z" />
        </symbol>
        <symbol id="d" overflow="visible">
          <path d="M9.219-6.89c-1.024 0-1.793.171-2.313.515-.511.344-.765.855-.765 1.531 0 .625.207 1.117.625 1.469.414.344.988.516 1.718.516.926 0 1.704-.328 2.329-.985.632-.664.953-1.492.953-2.484v-.563zm7.469-1.844V0h-4.922v-2.266c-.657.93-1.399 1.606-2.22 2.032-.823.414-1.823.625-3 .625-1.585 0-2.87-.457-3.859-1.375-.992-.926-1.484-2.13-1.484-3.61 0-1.789.613-3.101 1.844-3.937 1.238-.844 3.18-1.266 5.828-1.266h2.89v-.39c0-.77-.308-1.333-.921-1.688-.617-.363-1.57-.547-2.86-.547-1.054 0-2.03.106-2.937.313-.899.21-1.73.523-2.5.937v-3.734c1.039-.25 2.086-.442 3.14-.578a25.68 25.68 0 013.188-.204c2.758 0 4.75.547 5.969 1.641 1.226 1.086 1.844 2.856 1.844 5.313z" />
        </symbol>
        <symbol id="e" overflow="visible">
          <path d="M7.703-19.656v4.344h5.047v3.5H7.703v6.5c0 .71.14 1.187.422 1.437s.836.375 1.672.375h2.515V0H8.125C6.187 0 4.812-.398 4-1.203c-.805-.812-1.203-2.18-1.203-4.11v-6.5H.375v-3.5h2.422v-4.343z" />
        </symbol>
        <symbol id="f" overflow="visible">
          <path d="M12.766-13.078v-8.203h4.922v21.28h-4.922v-2.218c-.668.906-1.406 1.57-2.219 1.985S8.79.39 7.72.39c-1.887 0-3.434-.75-4.64-2.25-1.211-1.5-1.813-3.426-1.813-5.782 0-2.363.602-4.297 1.812-5.797 1.207-1.5 2.754-2.25 4.641-2.25 1.063 0 2 .215 2.813.641.82.43 1.566 1.086 2.234 1.969zM9.547-3.156c1.04 0 1.836-.379 2.39-1.14.552-.77.829-1.883.829-3.344 0-1.457-.277-2.567-.828-3.329-.555-.77-1.352-1.156-2.39-1.156-1.044 0-1.84.387-2.391 1.156-.555.762-.829 1.872-.829 3.329 0 1.46.274 2.574.829 3.343.55.762 1.347 1.14 2.39 1.14z" />
        </symbol>
        <symbol id="g" overflow="visible">
          <path d="M10.5-3.156c1.05 0 1.852-.38 2.406-1.14.551-.77.828-1.884.828-3.345 0-1.457-.277-2.566-.828-3.328-.554-.77-1.355-1.156-2.406-1.156-1.055 0-1.86.387-2.422 1.156-.555.774-.828 1.883-.828 3.328 0 1.45.273 2.559.828 3.329.563.773 1.367 1.156 2.422 1.156zm-3.25-9.922c.676-.883 1.422-1.54 2.234-1.969.82-.426 1.766-.64 2.829-.64 1.894 0 3.445.75 4.656 2.25 1.207 1.5 1.812 3.433 1.812 5.796 0 2.356-.605 4.282-1.812 5.782C15.758-.36 14.207.39 12.312.39 11.25.39 10.305.18 9.484-.234 8.672-.66 7.926-1.32 7.25-2.22V0H2.36v-21.281h4.89z" />
        </symbol>
        <symbol id="h" overflow="visible">
          <path d="M.344-15.312h4.89L9.36-4.921l3.5-10.391h4.89L11.313 1.454c-.648 1.695-1.402 2.883-2.265 3.562-.867.688-2 1.032-3.406 1.032H2.797v-3.22h1.531c.832 0 1.438-.136 1.813-.405.382-.262.68-.73.89-1.407l.14-.421z" />
        </symbol>
        <symbol id="i" overflow="visible">
          <path d="M2.578-20.406h14.203v3.969H7.828v3.797h8.422v3.984H7.828v4.672h9.25V0h-14.5z" />
        </symbol>
        <symbol id="j" overflow="visible">
          <path d="M.984-15.312H5.75L8.312-4.765l2.579-10.547h4.093l2.578 10.438 2.579-10.438h4.75L20.859 0h-5.343l-2.579-10.531L10.36 0H5.016z" />
        </symbol>
        <symbol id="k" overflow="visible">
          <path d="M2.36-15.312h4.89V0H2.36zm0-5.969h4.89v4H2.36z" />
        </symbol>
        <symbol id="l" overflow="visible">
          <path d="M17.75-9.328V0h-4.922v-7.14c0-1.32-.031-2.235-.094-2.735s-.168-.867-.312-1.11a1.994 1.994 0 00-.781-.734 2.295 2.295 0 00-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-15.311h4.89v2.234c.738-.883 1.52-1.539 2.344-1.969.832-.425 1.75-.64 2.75-.64 1.77 0 3.113.547 4.031 1.64.914 1.086 1.375 2.657 1.375 4.72z" />
        </symbol>
        <symbol id="m" overflow="visible">
          <path d="M2.578-20.406h8.735c2.593 0 4.581.578 5.968 1.734 1.395 1.149 2.094 2.79 2.094 4.922 0 2.137-.7 3.782-2.094 4.938-1.386 1.156-3.375 1.734-5.968 1.734H7.828V0h-5.25zm5.25 3.813v5.703h2.922c1.02 0 1.805-.25 2.36-.75.562-.5.843-1.203.843-2.11 0-.914-.281-1.617-.844-2.11-.554-.487-1.34-.734-2.359-.734z" />
        </symbol>
        <symbol id="n" overflow="visible">
          <path d="M2.578-20.406h6.688l4.656 10.922 4.672-10.922h6.687V0h-4.984v-14.938L15.594-3.922h-3.328L7.562-14.938V0H2.578z" />
        </symbol>
        <symbol id="o" overflow="visible">
          <path d="M12.422-21.281v3.219H9.719c-.688 0-1.172.125-1.453.375-.274.25-.406.687-.406 1.312v1.063h4.187v3.5H7.86V0H2.969v-11.812H.531v-3.5H2.97v-1.063c0-1.664.46-2.898 1.39-3.703.926-.8 2.368-1.203 4.329-1.203z" />
        </symbol>
        <symbol id="p" overflow="visible">
          <path d="M9.64-12.188c-1.085 0-1.914.39-2.484 1.172-.574.781-.86 1.906-.86 3.375s.286 2.594.86 3.375c.57.773 1.399 1.156 2.485 1.156 1.062 0 1.875-.383 2.437-1.156.57-.781.86-1.906.86-3.375s-.29-2.594-.86-3.375c-.562-.781-1.375-1.172-2.437-1.172zm0-3.5c2.633 0 4.692.715 6.172 2.14 1.477 1.419 2.22 3.387 2.22 5.907 0 2.512-.743 4.48-2.22 5.906C14.333-.317 12.274.39 9.642.39c-2.649 0-4.715-.707-6.203-2.125-1.493-1.426-2.235-3.394-2.235-5.906 0-2.52.742-4.488 2.235-5.906 1.488-1.426 3.554-2.141 6.203-2.141z" />
        </symbol>
        <symbol id="q" overflow="visible">
          <path d="M16.547-12.766c.613-.945 1.348-1.672 2.203-2.172.852-.5 1.79-.75 2.813-.75 1.757 0 3.097.547 4.015 1.64.926 1.087 1.39 2.657 1.39 4.72V0h-4.921v-8.345c.008-.132.016-.32.016-.562 0-1.082-.165-1.863-.485-2.343-.312-.489-.824-.735-1.531-.735-.93 0-1.648.387-2.156 1.156-.512.762-.774 1.868-.782 3.313v7.515h-4.921v-7.984c0-1.695-.149-2.785-.438-3.266-.293-.488-.812-.734-1.562-.734-.938 0-1.665.387-2.172 1.156-.512.762-.766 1.86-.766 3.297V0H2.328v-15.312H7.25v2.235c.602-.864 1.29-1.516 2.063-1.953a5.186 5.186 0 012.578-.657c1.062 0 2 .258 2.812.766.813.512 1.426 1.23 1.844 2.156z" />
        </symbol>
        <symbol id="r" overflow="visible">
          <path d="M17.75-9.328V0h-4.922v-7.11c0-1.343-.031-2.265-.094-2.765s-.168-.867-.312-1.11a1.994 1.994 0 00-.781-.734 2.295 2.295 0 00-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-21.28h4.89v8.203c.738-.883 1.52-1.54 2.344-1.969.832-.426 1.75-.64 2.75-.64 1.77 0 3.113.546 4.031 1.64.914 1.086 1.375 2.656 1.375 4.719z" />
        </symbol>
        <symbol id="s" overflow="visible">
          <path d="M2.578-20.406h5.875l7.422 14v-14h4.984V0h-5.875L7.563-14V0H2.578z" />
        </symbol>
        <symbol id="t" overflow="visible">
          <path d="M2.188-5.969v-9.344h4.921v1.532c0 .836-.007 1.875-.015 3.125-.012 1.25-.016 2.086-.016 2.5 0 1.242.031 2.132.094 2.672.07.542.18.933.328 1.171.207.325.473.575.797.75.32.168.691.25 1.11.25 1.019 0 1.82-.39 2.406-1.171.582-.782.875-1.868.875-3.266v-7.563h4.89V0h-4.89v-2.218c-.743.898-1.524 1.558-2.344 1.984C9.519.179 8.609.39 7.609.39c-1.761 0-3.105-.54-4.03-1.625-.93-1.082-1.391-2.66-1.391-4.734z" />
        </symbol>
        <symbol id="u" overflow="visible">
          <path d="M2.36-15.312h4.89V-.281c0 2.05-.496 3.617-1.484 4.703-.98 1.082-2.407 1.625-4.282 1.625H-.937V2.828h.859c.926 0 1.562-.21 1.906-.625.352-.418.531-1.246.531-2.484zm0-5.969h4.89v4H2.36z" />
        </symbol>
        <symbol id="v" overflow="visible">
          <path d="M14.719-14.828v3.984a7.612 7.612 0 00-2-1.015 6.629 6.629 0 00-2.078-.328c-1.367 0-2.434.402-3.203 1.203-.762.793-1.14 1.906-1.14 3.344 0 1.43.378 2.543 1.14 3.343.77.793 1.836 1.188 3.203 1.188.758 0 1.484-.11 2.172-.328a6.412 6.412 0 001.906-1.016v4c-.762.281-1.54.488-2.328.625a13.04 13.04 0 01-2.375.219C7.254.39 5.094-.316 3.53-1.734 1.977-3.148 1.203-5.117 1.203-7.64c0-2.531.774-4.504 2.328-5.922 1.563-1.414 3.723-2.125 6.485-2.125.8 0 1.594.074 2.375.219.781.136 1.555.351 2.328.64z" />
        </symbol>
      </defs>
      <path d="M573.04 330.07c-2.156-3.195-2.984-7.371-2.54-12.746 1.454-17.059-2.897-30.133-12.917-38.848-10.45-9.156-23.957-10.371-32.211-10.102-2.598-16.922-17.668-29.957-35.863-29.957H461.93c-1.934-4.453-6.45-7.586-11.7-7.586h-8.167c-18.652-32.746-53.887-52.977-92.887-52.977-38.97 0-74.18 20.234-92.828 52.977h-6.59c-5.25 0-9.766 3.133-11.699 7.586h-27.578c-18.195 0-33.262 13.035-35.863 29.953-8.254-.273-21.762.945-32.195 10.09-10.035 8.727-14.387 21.805-12.934 38.852.45 5.383-.383 9.559-2.539 12.754a5.63 5.63 0 00-.953 3.133v20.16a5.592 5.592 0 002.777 4.836 5.56 5.56 0 002.824.765c.946 0 1.899-.242 2.75-.722 3.72-2.098 6.996-4.52 9.735-7.207 9.394-9.2 13.512-21.297 12.246-35.965-.735-8.266.617-13.98 4.004-16.977 4.367-3.848 11.988-3.621 14.938-3.371 3.894 15.512 18.215 26.699 35.219 26.699H238.1c1.949 4.421 6.441 7.53 11.668 7.53h6.414c18.609 32.88 53.887 53.196 93.004 53.196 39.148 0 74.449-20.32 93.066-53.195h7.992c5.227 0 9.719-3.106 11.668-7.531h27.609c16.953 0 31.273-11.188 35.203-26.695 2.934-.25 10.57-.489 14.945 3.359 3.39 3.004 4.742 8.719 4.008 16.996-1.27 14.66 2.847 26.754 12.246 35.957 2.738 2.684 6.015 5.11 9.734 7.207a5.58 5.58 0 005.559-.047 5.588 5.588 0 002.781-4.836v-20.16a5.582 5.582 0 00-.957-3.129zm-398.89-46.648c-5.563-.207-14.66.477-21.234 6.273-6.207 5.489-8.809 14.355-7.75 26.352.922 10.633-1.758 19.38-7.973 26.012v-7.257c2.93-5.09 4.063-11.133 3.45-18.426-1.126-13.293 1.94-23.207 9.144-29.473 7.578-6.641 18.129-7.524 24.363-7.332zm250.05 15.5l-20.266.172.027-4.133H424.2zm0-33.992l-20.266.172.027-4.133H424.2zm-238.7 23.781a22.797 22.797 0 01-.133-2.418v-12.746c0-13.191 11.262-23.93 25.102-23.93h26.574v60.602H210.47c-12.758 0-23.723-9.438-24.969-21.508zm62.742 27.809v-73.254c0-.668.688-1.23 1.504-1.23h13.328c.816 0 1.5.562 1.5 1.23v73.258c0 .68-.672 1.23-1.5 1.23h-13.328c-.828-.003-1.504-.554-1.504-1.234zm100.92 54.426c-33.309 0-63.523-16.348-80.715-43.164.14-.063.246-.176.387-.246.777-.39 1.504-.856 2.176-1.39.21-.169.421-.321.62-.5.766-.688 1.462-1.446 2.036-2.298.082-.12.133-.254.21-.379.481-.765.86-1.59 1.165-2.453.094-.265.18-.523.254-.796.281-1.028.476-2.082.476-3.196v-73.258c0-1.101-.195-2.148-.468-3.164-.075-.273-.16-.535-.254-.8a12.237 12.237 0 00-1.11-2.368c-.09-.148-.152-.305-.25-.45a12.562 12.562 0 00-2-2.292c-.191-.172-.394-.32-.593-.48a12.759 12.759 0 00-2.082-1.368c-.149-.078-.266-.203-.418-.273 17.21-26.723 47.375-43.016 80.566-43.016 33.48 0 63.879 16.555 81.023 43.656-.06.035-.102.09-.16.129-.801.504-1.54 1.09-2.204 1.75-.133.133-.234.289-.363.43a12.359 12.359 0 00-1.379 1.808c-.16.258-.297.52-.437.79a12.27 12.27 0 00-.793 1.894c-.09.277-.192.543-.266.828-.234.941-.39 1.91-.39 2.922v6.503h-20.239c-6.191 0-11.227 4.899-11.227 10.926v4.41c0 6.055 5.036 10.978 11.227 10.978h20.238v7.68h-20.238c-6.191 0-11.227 4.925-11.227 10.976v4.356c0 6.055 5.036 10.977 11.227 10.977h20.238v6.45c0 1.019.16 2 .399 2.948.07.285.172.551.262.828.222.672.492 1.317.82 1.934.14.262.27.516.426.766.449.714.96 1.379 1.543 1.992.078.082.136.18.218.258a12.74 12.74 0 002.266 1.757c.074.047.129.114.2.157-17.126 27.188-47.57 43.789-81.165 43.789zm102.56-54.426c0 .68-.672 1.23-1.504 1.23H436.89c-.824 0-1.5-.55-1.5-1.23v-73.254c0-.668.684-1.23 1.5-1.23h13.328c.817 0 1.504.562 1.504 1.23zm37.77-6.3h-26.574l.004-60.603h26.574c13.84 0 25.102 10.734 25.102 23.93v12.746c0 .82-.043 1.598-.133 2.418-1.309 12.262-12.043 21.508-24.973 21.508zm73.289 31.84c-6.21-6.634-8.89-15.38-7.973-26.009 1.063-12.004-1.543-20.87-7.754-26.367-5.933-5.226-13.945-6.297-19.52-6.297-.601 0-1.175.012-1.71.035v-3.859c6.23-.191 16.784.695 24.378 7.348 7.188 6.254 10.254 16.164 9.13 29.469-.614 7.285.515 13.332 3.449 18.422z" />
      <path d="M349.2 323.5c-9.547 0-17.32 7.594-17.32 16.93 0 9.332 7.77 16.926 17.32 16.926 9.547 0 17.32-7.594 17.32-16.926 0-9.336-7.77-16.93-17.32-16.93zm0 22.652c-3.375 0-6.121-2.566-6.121-5.727 0-3.156 2.746-5.726 6.121-5.726s6.121 2.57 6.121 5.726c0 3.16-2.746 5.727-6.121 5.727zM356.37 203.71a25.052 25.052 0 00-7.164-1.027c-13.863 0-25.141 10.988-25.141 24.488 0 .187.012.379.027.57l.36 3.27c0 .19.011.386.027.578l7.406 71.418c.176 9.183 7.875 16.602 17.32 16.602s17.145-7.426 17.312-16.61l7.383-71.405c0-.047.004-.094.012-.141l.394-3.676c.024-.199.031-.398.031-.597 0-3.082-.585-6.07-1.707-8.825-2.777-7.058-8.882-12.539-16.262-14.645zm6.394 26.672c-.003.059-.011.117-.015.18l-7.395 71.55a6.871 6.871 0 00-.027.567c0 3.156-2.746 5.723-6.121 5.723-3.379 0-6.125-2.567-6.125-5.723a5.81 5.81 0 00-.031-.582l-7.395-71.113a7.05 7.05 0 00-.027-.57l-.36-3.504c.149-7.207 6.344-13.031 13.941-13.031 1.383 0 2.711.187 4.02.578 4.117 1.18 7.477 4.168 9.012 8.059.562 1.382.87 2.855.898 4.378z" />
    </svg>
  );
}

export default errorServer;
