import React from 'react';

function Section_3({ src }) {
  return (
      <section
          className="relative bg-cover bg-center bg-no-repeat h-screen "
          style={{ backgroundImage: `url('${src}')` }}
      >
      </section>
  )
}

export default Section_3;