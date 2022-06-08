let file1 = {
  message: "Halo dunia",
};
let file2 = [
  {
    message: "halo world",
  },
];

let file3 = [
  {
    data: {
      message: "halo sekai",
    },
  },
];

let dat = [file1, file2, file3];

let hasil = [];
  dat.forEach((element) => {
    if(Array.isArray(element)) {
        element.forEach((value) => {
            if ('data' in value){
                hasil.push(value.data.message);
              }else{
                hasil.push(value.message);
              }
          });
    } else {
        hasil.push(element.message);
    }
  });


console.log(hasil);

// file3.forEach((value) => {
//     if ('data' in value){
//         console.log(true);
//         hasil.push(value.data.message);
//       }else{
//         hconsole.log(false);
//       }
//   });
