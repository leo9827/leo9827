import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-50">
      <Container>
        <div className="py-4 flex flex-col lg:flex-row items-center justify-center">
          © 2023 leo9827. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}

export default Footer