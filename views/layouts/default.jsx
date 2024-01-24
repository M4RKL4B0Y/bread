const React = require('react')

function Default(html) {
  return (
<html>
    <head>
        <title>Default</title>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" integrity="sha512-Ojqt7YpXqYM6//AdMhErV3ot38rYgGF5QLJEwx7zhesjL9VqfhWiRz/dWK22hsn96RNz0CLl85+pg1P0BmfgVQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="/main.css" />
     </head>

    <body>  
        <div className="wrapper">
            <header>
                <h1><a href="/breads">BreadCRUD</a></h1>
            </header>
                <div className="container">
                    {html.children}
                </div>
        </div>
    </body>

 </html>
  )
}

module.exports = Default


