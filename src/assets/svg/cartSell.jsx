/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function CartSell(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={180}
      height={180}
      viewBox="0 0 32 32"
    >
      <path
        style={{
          lineHeight: 'normal',
          textIndent: 0,
          textAlign: 'start',
          textDecorationLine: 'none',
          textDecorationStyle: 'solid',
          textDecorationColor: '#000',
          textTransform: 'none',
          blockProgression: 'tb',
          isolation: 'auto',
          mixBlendMode: 'normal'
        }}
        fill="#000"
        {...props}
        fillOpacity={1}
        fillRule="nonzero"
        stroke="none"
        strokeDasharray="none"
        strokeDashoffset={0}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={4}
        strokeOpacity={1}
        strokeWidth={1}
        d="M18.5 1021.42a6.508 6.508 0 00-6.5 6.5c0 .478.056.941.154 1.39h-5.64l-.381-2.307c-.158-.957-.982-1.664-1.934-1.664-.004 0-.181-.01-.287-.012a1.503 1.503 0 00-1.412-1.018c-.822 0-1.5.678-1.5 1.5 0 .823.678 1.5 1.5 1.5.64 0 1.187-.413 1.4-.982.11 0 .295.012.3.012.454 0 .867.343.946.828l.86 5.222c0 .001 0 0 0 0l2 11.999c.006.037.024.072.033.109a2.51 2.51 0 00-1.539 2.309c0 1.376 1.124 2.5 2.5 2.5h2.05a2.51 2.51 0 002.45 1.998 2.512 2.512 0 002.45-2h5.1a2.51 2.51 0 002.45 1.998 2.512 2.512 0 002.45-2h.75a.5.5 0 100-1h-.75a2.508 2.508 0 00-2.45-2 2.508 2.508 0 00-2.45 2h-5.1a2.508 2.508 0 00-2.45-2 2.508 2.508 0 00-2.45 2l-2.05.01c-.84 0-1.5-.66-1.5-1.5s.66-1.5 1.5-1.5h17.486a.98.98 0 00.702-.31 1.22 1.22 0 00.289-.587l2.513-12a.79.79 0 00.012-.197c.578-.21.998-.76.998-1.406 0-.823-.678-1.5-1.5-1.5h-4.654a6.49 6.49 0 00.154-1.389c0-3.584-2.916-6.5-6.5-6.5zm0 1c3.043 0 5.5 2.457 5.5 5.5 0 3.044-2.456 5.5-5.5 5.5a5.492 5.492 0 01-5.5-5.5c0-3.043 2.457-5.5 5.5-5.5zm.002 1.382c-.349 0-.437.188-.514.289a1.93 1.93 0 00-.19.314c-.113.227-.22.498-.33.772-.108.273-.215.546-.302.75-.032.076-.058.13-.082.18-.055.01-.112.016-.195.024-.22.02-.512.032-.805.051-.293.02-.584.04-.834.078-.125.02-.24.04-.36.08-.119.042-.323.07-.43.403-.109.332.042.473.114.578.073.104.15.19.24.28.18.178.404.368.63.556.225.188.452.372.619.517.063.055.105.096.144.135-.01.055-.02.112-.039.193-.05.216-.126.499-.2.784-.072.285-.14.57-.18.82a1.867 1.867 0 00-.036.365c.002.127-.036.33.246.535.282.206.465.111.586.074a1.91 1.91 0 00.336-.144c.225-.116.473-.273.72-.43.248-.157.497-.316.686-.43.072-.042.123-.07.172-.095.049.026.1.055.172.098.19.114.432.272.68.43.247.157.496.31.72.427.113.058.217.11.338.146.121.037.304.136.586-.07.283-.205.244-.41.246-.537a1.93 1.93 0 00-.03-.365c-.042-.25-.112-.535-.185-.82-.072-.285-.148-.568-.197-.783-.019-.083-.028-.14-.037-.194.04-.039.08-.082.143-.137.166-.145.395-.328.62-.515.227-.188.45-.377.63-.555.09-.089.17-.173.242-.277.072-.104.22-.245.113-.578-.107-.333-.31-.36-.43-.403a1.917 1.917 0 00-.359-.08c-.25-.038-.54-.06-.832-.08-.293-.019-.585-.035-.805-.055-.084-.01-.144-.015-.199-.023a3.82 3.82 0 01-.08-.18c-.086-.203-.19-.476-.299-.75a10.108 10.108 0 00-.33-.773 1.95 1.95 0 00-.19-.314c-.076-.101-.164-.289-.513-.29zm0 1.498c.037.09.068.152.105.248.105.266.211.542.31.773.048.116.095.222.146.317.05.095.056.172.246.31.19.139.267.122.373.14.105.02.217.033.341.044.25.022.544.038.829.057.101.01.172.017.267.023-.072.062-.123.113-.201.177-.22.183-.448.367-.637.532-.094.082-.18.159-.254.236-.074.077-.148.108-.22.332-.073.224-.033.294-.018.4.015.107.038.218.066.34.056.245.133.531.204.809.025.1.036.17.058.264-.082-.051-.144-.083-.23-.139-.241-.153-.49-.314-.705-.443a3.847 3.847 0 00-.301-.168c-.097-.047-.15-.108-.385-.108-.235 0-.284.056-.38.104a4.074 4.074 0 00-.305.17c-.215.129-.462.288-.704.441-.086.055-.146.089-.228.139.023-.095.031-.164.057-.264.07-.277.146-.562.203-.807.028-.122.053-.233.068-.34.015-.106.057-.176-.016-.4-.072-.224-.146-.254-.22-.332a3.843 3.843 0 00-.252-.236c-.189-.166-.42-.35-.639-.533-.08-.066-.129-.116-.203-.18.097-.01.166-.02.27-.025.284-.018.578-.032.828-.053.124-.011.24-.023.345-.041.106-.02.182 0 .371-.139.19-.138.196-.217.247-.312.05-.095.099-.2.148-.315.098-.23.205-.509.31-.775.038-.095.069-.157.106-.246zm-16.002.01c.282 0 .5.218.5.5 0 .282-.218.5-.5.5a.493.493 0 01-.5-.5c0-.282.218-.5.5-.5zm4.178 5h5.783c.139.35.307.683.502 1H6.842l-.164-1zm17.861 0H29.5c.286 0 .5.214.5.5 0 .285-.214.5-.5.5h-5.463c.195-.317.363-.65.502-1zm-17.531 2h6.713a6.515 6.515 0 002.383 1.648.5.5 0 00-.032.182v1.664a.5.5 0 101 0v-1.547c.438.098.89.155 1.356.16v1.387a.5.5 0 101 0v-1.457a6.446 6.446 0 001.377-.356.5.5 0 00-.02.149v1.664a.5.5 0 101 0v-1.664a.5.5 0 00-.285-.46 6.527 6.527 0 001.78-1.37h5.708l-2.492 11.898c-.012.058-.032.088-.04.102H9.035a.5.5 0 00-.01 0 .188.188 0 01-.032-.082l-.152-.919H14a.5.5 0 100-1H8.674l-1.666-10zm2.484 1.322a.5.5 0 00-.492.508v1.664a.5.5 0 101 0v-1.664a.5.5 0 00-.508-.508zm2.358 0a.5.5 0 00-.493.508v1.664a.5.5 0 101 0v-1.664a.5.5 0 00-.507-.508zm2.357 0a.5.5 0 00-.492.508v1.664a.5.5 0 101 0v-1.664a.5.5 0 00-.508-.508zm9.428 0a.5.5 0 00-.492.508v1.664a.5.5 0 101 0v-1.664a.5.5 0 00-.508-.508zm2.357 0a.5.5 0 00-.492.508v1.664a.5.5 0 101 0v-1.664a.5.5 0 00-.508-.508zm-9.435 8.678a.5.5 0 10.05 1H18.5a.5.5 0 100-1h-1.893a.5.5 0 00-.05 0zm-3.057 5c.817 0 1.47.639 1.496 1.449a.5.5 0 000 .098 1.49 1.49 0 01-1.496 1.453 1.49 1.49 0 01-1.496-1.451.5.5 0 000-.098 1.49 1.49 0 011.496-1.451zm10 0c.817 0 1.47.639 1.496 1.449a.5.5 0 000 .098 1.49 1.49 0 01-1.496 1.453 1.49 1.49 0 01-1.496-1.451.5.5 0 000-.098 1.49 1.49 0 011.496-1.451z"
        baselineShift="baseline"
        clipRule="nonzero"
        color="#000"
        colorInterpolation="sRGB"
        colorInterpolationFilters="linearRGB"
        colorRendering="auto"
        direction="ltr"
        display="inline"
        fontFamily="sans-serif"
        fontSize="medium"
        fontStretch="normal"
        fontStyle="normal"
        fontVariant="normal"
        fontWeight="normal"
        imageRendering="auto"
        letterSpacing="normal"
        opacity={1}
        overflow="visible"
        paintOrder="fill markers stroke"
        shapeRendering="auto"
        textAnchor="start"
        textDecoration="none"
        textRendering="auto"
        visibility="visible"
        wordSpacing="normal"
        writingMode="lr-tb"
        transform="translate(0 -1020.362)"
      />
    </svg>
  );
}

export default CartSell;