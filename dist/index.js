const html = (data) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>My Team</title>
  </head>
  <body>
    <div class="flex space-x-4">
      <div class="box-size h-40 w-64 text-center text-3xl font-bold">
        <h2>My Team</h2>
      </div>
      
      <div class="box-size h-64 w-64 p4 border-4 text-center">
        <div class="employeeName">${data.name}</div>
        <div class="id">${data.id}</div>
        <div class="officeNumber">${data.officeNumber}</div>
        <div class="email">${data.email}</div>
        <div class="role">${data.role}</div>
      </div>
      <div class="box-size h-64 w-64 p4 border-4 text-center">
        <div class="employeeName">${data.name}</div>
        <div class="id">${data.id}</div>
        <div class="github">${data.github}</div>
        <div class="email">${data.email}</div>
        <div class="engineer">${data.engineer}</div>
      </div>
      <div class="box-size h-64 w-64 p4 border-4 text-center">
        <div class="employeeName">${data.name}</div>
        <div class="id">${data.id}</div>
        <div class="school">${data.school}</div>
        <div class="email">${data.email}</div>
        <div class="intern">${data.intern}</div>
      </div>
    </div>
  </body>
</html>
  
  `;
};

module.exports = html;