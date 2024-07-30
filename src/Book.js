// import React from 'react';
// import FlipPage from 'react-flip-page';
// import './Book.css'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCopy } from '@fortawesome/free-solid-svg-icons';
// import i01 from './photo/01.webp'
// import i1 from './photo/1.jpg';
// import i2 from './photo/2.jpg';
// import i3 from './photo/3.jpg';
// import i4 from './photo/4.jpg';
// import i5 from './photo/5.jpg';
// import i6 from './photo/6.jpg';
// import i7 from './photo/7.jpg';
// import i8 from './photo/8.jpg';
// import i9 from './photo/9.jpg';
// import i10 from './photo/10.jpg';
// import i11 from './photo/11.jpg';
// import i12 from './photo/12.jpg';
// import i13 from './photo/13.jpg'

// const pages = [
//     { image: i01, text: 'Прошу рассмотреть кейсы, внесенные верно, для исправления ошибки.' },
//   {
//     image: i1,
//     text: {
//       cardNumber: '2200700910906386',
//       cardId: '845960e8-9f15-4f1a-b4d5-ba95ea7252ec',
//       dropId: '1a4abd0b-0cff-4eac-a22a-38feba0e7719',
//       ssyl: 'https://admin.pays-pro.com/bank-cards/845960e8-9f15-4f1a-b4d5-ba95ea7252ec'
//     }
//   },
//   {  image: i2,
//     text: {
//       cardNumber: '2202206924768737',
//       cardId: 'ce63d8de-128b-4231-815e-97e10f05a4c1',
//       dropId: 'b0674e08-0708-4aad-9fb9-56ffcdfc3841',
//       ssyl: 'https://admin.pays-pro.com/bank-cards/ce63d8de-128b-4231-815e-97e10f05a4c1'
//     }},
//   {  image: i3,
//     text: {
//       cardNumber: '2202208348383101',
//       cardId: 'bd1a5182-e2d9-4eec-8431-f5692ad63447',
//       dropId: 'f1766962-3f7a-4bcc-a446-9e020178fcdb',
//       ssyl: 'https://admin.pays-pro.com/bank-cards/bd1a5182-e2d9-4eec-8431-f5692ad63447'
//     } },
//   {  image: i4,
//     text: {
//       cardNumber: '2202208317475508',
//       cardId: '07ee5a0c-b263-4311-b46d-2c0b82e5b8de',
//       dropId: '32f5dd87-5ebe-463a-9d9c-2543cc48f4db',
//       ssyl: 'https://admin.pays-pro.com/bank-cards/07ee5a0c-b263-4311-b46d-2c0b82e5b8de'
//     } },
//   {  image: i5,
//     text: {
//       cardNumber: '2202208331349580',
//       cardId: '4ddc8ff2-839f-4c29-b0bb-d3f40d8e751c',
//       dropId: '9ac11a11-4386-41dc-8cf9-1bdf19075cef',
//       ssyl: 'https://admin.pays-pro.com/bank-cards/4ddc8ff2-839f-4c29-b0bb-d3f40d8e751c'
//     } },
//   {  image: i6,
//     text: {
//       cardNumber: '2200390972867856',
//       cardId: '2b97b860-dc94-422d-8d6e-fee6c60a0a45',
//       dropId: '34d201ef-a6bf-4498-9a33-c54b53f86f1a',
//       ssyl: 'https://admin.pays-pro.com/bank-cards/2b97b860-dc94-422d-8d6e-fee6c60a0a45'
//     } },
//   { image: i7,
//     text: {
//       cardNumber: '2202208325176353',
//       cardId: 'dd76f629-18f7-4f21-b55e-50794ec91a94',
//       dropId: '05853432-5390-4553-b06d-766311948e11',
//       ssyl: 'https://admin.pays-pro.com/bank-cards/dd76f629-18f7-4f21-b55e-50794ec91a94'
//     } },
//   {  image: i8,
//     text: {
//       cardNumber: '2202206351956946',
//       cardId: 'a97a9390-aae1-42da-8210-2f988b5ca558',
//       dropId: '338c08df-3d6f-4b6b-a676-538aeb782354',
//       ssyl: 'https://admin.pays-pro.com/bank-cards/a97a9390-aae1-42da-8210-2f988b5ca558'
//     } },
//   {  image: i9,
//     text: {
//       cardNumber: '2202206875583630',
//       cardId: 'e2876a4d-16ab-4352-8e12-4cda52932143',
//       dropId: '158edaea-d591-400d-955e-c50d682346a4',
//       ssyl: 'https://admin.pays-pro.com/bank-cards/e2876a4d-16ab-4352-8e12-4cda52932143'
//     } },
//   {  image: i10,
//     text: {
//       cardNumber: '2202201103516122',
//       cardId: '8e71a811-0642-4648-b14e-3dad5af4a88d',
//       dropId: '158edaea-d591-400d-955e-c50d682346a4',
//       ssyl: 'https://admin.pays-pro.com/bank-cards/8e71a811-0642-4648-b14e-3dad5af4a88d'
//     } },
//   {  image: i11,
//     text: {
//       cardNumber: '2202206913737776',
//       cardId: '52ebd108-0c1c-4fac-9109-ebe16493d8da',
//       dropId: '813aa7e2-bc27-46bc-970b-67698e362b4b',
//       ssyl: 'https://admin.pays-pro.com/bank-cards/52ebd108-0c1c-4fac-9109-ebe16493d8da'
//     } },
//   {  image: i12,
//     text: {
//       cardNumber: '2202208131798416',
//       cardId: '255ff388-6cef-4db3-822e-9a758d8d7174',
//       dropId: '949c33d7-e872-4bde-a9dc-51ccb081c5bc',
//       ssyl: 'https://admin.pays-pro.com/bank-cards/255ff388-6cef-4db3-822e-9a758d8d7174'
//     }},
//     { image: i13 },
// ];

// const copyToClipboard = (text) => {
//   navigator.clipboard.writeText(text).then(() => {
//     alert('Text copied to clipboard!');
//   }).catch(err => {
//     alert('Failed to copy text: ' + err);
//   });
// };

// const Book = () => {
//   return (
//     <div className="book-container">
//       <FlipPage
//         orientation="horizontal"
//         showSwipeHint={true}
//         showCover={true}
//         uncutPages={true}
//         className="flip-page"
//       >
//         {pages.map((page, index) => (
//           <div className="page" key={index}>
//             <img src={page.image} alt={`Page ${index + 1}`} className="page-image" />
//             <div className="text-container">
//               {page.text.cardNumber && (
//                 <div className="text-item">
//                   <span>Карта: {page.text.cardNumber}</span>
//                   <button onClick={() => copyToClipboard(page.text.cardNumber)} className="copy-button">
//                   <FontAwesomeIcon icon={faCopy} />
//                   </button>
//                 </div>
//               )}
//               {page.text.cardId && (
//                 <div className="text-item">
//                   <span>Card ID: {page.text.cardId}</span>
//                   <button onClick={() => copyToClipboard(page.text.cardId)} className="copy-button">
//                   <FontAwesomeIcon icon={faCopy} />
//                   </button>
//                 </div>
//               )}
//               {page.text.dropId && (
//                 <div className="text-item">
//                   <span>Drop ID: {page.text.dropId}</span>
//                   <button onClick={() => copyToClipboard(page.text.dropId)} className="copy-button">
//                   <FontAwesomeIcon icon={faCopy} />
//                   </button>
//                 </div>
//               )}
//               {page.text.ssyl && (
//                 <div className="text-item">
                  
//                   <a href={page.text.ssyl} target="_blank" rel="noopener noreferrer" className="hidden-link">
//                     Ссылка на ДМ

//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </FlipPage>
//     </div>
//   );
// };

// export default Book;
import React from 'react';
import FlipPage from 'react-flip-page';
import './Book.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import i01 from './photo/01.jpg'
import i1 from './photo/1.jpg';
import i2 from './photo/2.jpg';
import i3 from './photo/3.jpg';
import i4 from './photo/4.jpg';
import i5 from './photo/5.jpg';
import i6 from './photo/6.jpg';
import i7 from './photo/7.jpg';
import i8 from './photo/8.jpg';
import i9 from './photo/9.jpg';
import i10 from './photo/10.jpg';
import i11 from './photo/11.jpg';
import i12 from './photo/12.jpg';
import i13 from './photo/13.jpg';

const pages = [
  { image: i01 },
  {
    image: i1,
    text: {
      cardNumber: '2200700910906386',
      cardId: '845960e8-9f15-4f1a-b4d5-ba95ea7252ec',
      dropId: '1a4abd0b-0cff-4eac-a22a-38feba0e7719',
      ssyl: 'https://admin.pays-pro.com/bank-cards/845960e8-9f15-4f1a-b4d5-ba95ea7252ec'
    }
  },
  { image: i2,
    text: {
      cardNumber: '2202206924768737',
      cardId: 'ce63d8de-128b-4231-815e-97e10f05a4c1',
      dropId: 'b0674e08-0708-4aad-9fb9-56ffcdfc3841',
      ssyl: 'https://admin.pays-pro.com/bank-cards/ce63d8de-128b-4231-815e-97e10f05a4c1'
    }},
  { image: i3,
    text: {
      cardNumber: '2202208348383101',
      cardId: 'bd1a5182-e2d9-4eec-8431-f5692ad63447',
      dropId: 'f1766962-3f7a-4bcc-a446-9e020178fcdb',
      ssyl: 'https://admin.pays-pro.com/bank-cards/bd1a5182-e2d9-4eec-8431-f5692ad63447'
    } },
  { image: i4,
    text: {
      cardNumber: '2202208317475508',
      cardId: '07ee5a0c-b263-4311-b46d-2c0b82e5b8de',
      dropId: '32f5dd87-5ebe-463a-9d9c-2543cc48f4db',
      ssyl: 'https://admin.pays-pro.com/bank-cards/07ee5a0c-b263-4311-b46d-2c0b82e5b8de'
    } },
  { image: i5,
    text: {
      cardNumber: '2202208331349580',
      cardId: '4ddc8ff2-839f-4c29-b0bb-d3f40d8e751c',
      dropId: '9ac11a11-4386-41dc-8cf9-1bdf19075cef',
      ssyl: 'https://admin.pays-pro.com/bank-cards/4ddc8ff2-839f-4c29-b0bb-d3f40d8e751c'
    } },
  { image: i6,
    text: {
      cardNumber: '2200390972867856',
      cardId: '2b97b860-dc94-422d-8d6e-fee6c60a0a45',
      dropId: '34d201ef-a6bf-4498-9a33-c54b53f86f1a',
      ssyl: 'https://admin.pays-pro.com/bank-cards/2b97b860-dc94-422d-8d6e-fee6c60a0a45'
    } },
  { image: i7,
    text: {
      cardNumber: '2202208325176353',
      cardId: 'dd76f629-18f7-4f21-b55e-50794ec91a94',
      dropId: '05853432-5390-4553-b06d-766311948e11',
      ssyl: 'https://admin.pays-pro.com/bank-cards/dd76f629-18f7-4f21-b55e-50794ec91a94'
    } },
  { image: i8,
    text: {
      cardNumber: '2202206351956946',
      cardId: 'a97a9390-aae1-42da-8210-2f988b5ca558',
      dropId: '338c08df-3d6f-4b6b-a676-538aeb782354',
      ssyl: 'https://admin.pays-pro.com/bank-cards/a97a9390-aae1-42da-8210-2f988b5ca558'
    } },
  { image: i9,
    text: {
      cardNumber: '2202206875583630',
      cardId: 'e2876a4d-16ab-4352-8e12-4cda52932143',
      dropId: '158edaea-d591-400d-955e-c50d682346a4',
      ssyl: 'https://admin.pays-pro.com/bank-cards/e2876a4d-16ab-4352-8e12-4cda52932143'
    } },
  { image: i10,
    text: {
      cardNumber: '2202201103516122',
      cardId: '8e71a811-0642-4648-b14e-3dad5af4a88d',
      dropId: '158edaea-d591-400d-955e-c50d682346a4',
      ssyl: 'https://admin.pays-pro.com/bank-cards/8e71a811-0642-4648-b14e-3dad5af4a88d'
    } },
  { image: i11,
    text: {
      cardNumber: '2202206913737776',
      cardId: '52ebd108-0c1c-4fac-9109-ebe16493d8da',
      dropId: '813aa7e2-bc27-46bc-970b-67698e362b4b',
      ssyl: 'https://admin.pays-pro.com/bank-cards/52ebd108-0c1c-4fac-9109-ebe16493d8da'
    } },
  { image: i12,
    text: {
      cardNumber: '2202208131798416',
      cardId: '255ff388-6cef-4db3-822e-9a758d8d7174',
      dropId: '949c33d7-e872-4bde-a9dc-51ccb081c5bc',
      ssyl: 'https://admin.pays-pro.com/bank-cards/255ff388-6cef-4db3-822e-9a758d8d7174'
    }},
  { image: i13 },
];

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    alert('Text copied to clipboard!');
  }).catch(err => {
    alert('Failed to copy text: ' + err);
  });
};

const Book = () => {
  return (
    <>
            <h2 className='h'>
            <a href='https://docs.google.com/spreadsheets/d/16XT_x3xIWdrU_hrPj3_baor5WZdTSwt94rtxwifP4u0/edit?gid=1312742657#gid=1312742657' target="_blank" rel="noopener noreferrer">Депы за карты 2.0</a>
        </h2>

    <div className="book-container">
        
      <FlipPage
        orientation="horizontal"
        showSwipeHint={true}
        showCover={true}
        uncutPages={true}
        className="flip-page"
      >
        {pages.map((page, index) => (
          <div className="page" key={index}>
            <img src={page.image} alt={`Page ${index + 1}`} className="page-image" />
            <div className="text-container">
              {page.text?.cardNumber && (
                <div className="text-item">
                  <span>Карта: {page.text.cardNumber}</span>
                  <button onClick={() => copyToClipboard(page.text.cardNumber)} className="copy-button">
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                </div>
              )}
              {page.text?.cardId && (
                <div className="text-item">
                  <span>Card ID: {page.text.cardId}</span>
                  <button onClick={() => copyToClipboard(page.text.cardId)} className="copy-button">
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                </div>
              )}
              {page.text?.dropId && (
                <div className="text-item">
                  <span>Drop ID: {page.text.dropId}</span>
                  <button onClick={() => copyToClipboard(page.text.dropId)} className="copy-button">
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                </div>
              )}
              {page.text?.ssyl && (
                <div className="text-item">
                  <a href={page.text.ssyl} target="_blank" rel="noopener noreferrer" className="hidden-link">
                    Ссылка на ДМ
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </FlipPage>
    </div>
    </>
  );
};

export default Book;
