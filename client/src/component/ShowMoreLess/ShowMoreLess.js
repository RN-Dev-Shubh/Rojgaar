import React from 'react'

const ShowMoreLess = (props) => {
  return (
    props.show_text ? (
        props.desc.length > 20 ? (
          <>
            {props.desc.slice(0, 20)}
            <a
              className="show_text"
              onClick={() => props.setShow_text(false)}
            >
              ...Show more
            </a>
          </>
        ) : (
          props.desc
        )
      ) : (
        <>
          {props.desc.length > 20 ? (
            <>
            <div>
                
              {props.desc}
              <a
                className="show_text"
                onClick={() => props.setShow_text(true)}
                >
                &nbsp;Show Less
              </a>
                  </div>
            </>
          ) : (
            props.desc
          )}
        </>
      ))
}

export default ShowMoreLess