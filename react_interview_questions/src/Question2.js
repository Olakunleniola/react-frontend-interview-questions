// What wrong with this code? It crashes when I run it

// function question_2() {
//     const elements = ['one', 'two', 'three'];
  
//     return (
//       <div>
//         {
//           elements.map((value) => (<span>{value}</span>))
//          }
//       </div>
//     )
//   }

export default function Question2() {
    const elements = ['one', 'two', 'three'];
  
    return (
      <div className="p-10">
        <h2 className="font-black my-10">Question 2</h2>
        <p>
          What wrong with this code? It crashes when I run it<br/>
            {`
              function question_2() { \t
                const elements = ['one', 'two', 'three'];
              
                  return (
                    <div>
                      {
                        elements.map((value) => (<span>{value}</span>))
                      }
                    </div>
                  )
                }
            `}        
        </p>

        <h3 className="my-6 font-bold">Solution</h3>
        {
          elements.map((value, idx) => (<p key={idx}>{value}</p>))
        }
      </div>
    )
  }