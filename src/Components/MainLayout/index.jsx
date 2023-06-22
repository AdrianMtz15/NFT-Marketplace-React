import PropTypes from 'prop-types';


function MainLayout({
  children
}) {
  return(
    <main className="relative p-[2.5%] ml-[20vw] w-[50vw]">
      {
        children
      }
    </main>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export {
  MainLayout
}