<h1>BOILERMAKER</h1>
<nav>
  {
    isLoggedIn
      ? <div>
        {/* The navbar will show these links after you log in */}
        <Link to='/home'>Home</Link>
        <a href='#' onClick={handleClick}>Logout</a>
      </div>
      : <div>
        {/* The navbar will show these links before you log in */}
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
  }
</nav>
<hr />
