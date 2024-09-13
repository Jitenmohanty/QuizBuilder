const Layout = ({ children }) => (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-50">
      <div className="w-full max-w-4xl p-6">
        {children}
      </div>
    </div>
  );
  
  export default Layout;
  