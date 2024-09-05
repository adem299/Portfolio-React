const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-5">
      <div className="container mx-auto px-4">
        <div className="mt-8 border-t border-neutral-800 pt-4 text-center">
          <p className="text-neutral-500">© {new Date().getFullYear()} Ade Mulyana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
