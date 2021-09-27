import React from 'react'

const Card = (props) => {
    return (
      <div class="card mb-4 box-shadow">
        <h2 className="text-center">{props.title}</h2>
        <img
          class="card-img-top"
          src={require(`../../assets/screenshots/${props.image}`).default.toString()}
          //   data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
          alt="Card cap"
        />
        <div class="card-body">
          <p class="card-text">{props.description}</p>
          <h4>Technical stack:</h4>
          <p class="card-text">{props.stack}</p>
          {/* <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div> */}
        </div>
      </div>
    );
}

export default Card
