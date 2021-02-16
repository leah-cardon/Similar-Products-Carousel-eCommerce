import React from 'react';
import ReactDOM from 'react-dom';
import ProductPhoto from '../ProductPhoto/ProductPhoto.jsx';
import QuickLookModalStyles from './QuickLookModalStyles.js';


const QuickLookModal = (props) => {

  if (!props.open) return null;

  var colorBoxes = [];

  for (var i = 0; i < props.product.colors.length; i++) {
    colorBoxes.push(
      <span key={i}>COLOR BOX    </span>
    );
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  return ReactDOM.createPortal(
    <QuickLookModalStyles>

      <>
        <div className='modalOverlay' onClick={props.onClose} />
          <div className='modalContainer'  >
            <button
              className='modalX'
              onClick={props.onClose}>
              X
            </button>
            <div className='photoAndDetailsModal'>
              <ProductPhoto
              product={props.product}
              size='modal'
              />
              <div>
                <div className='brandName'>{props.product.brand}</div>
                <div>{props.product.product_name}</div>
                <div className='detailsSizeAndItem'>SIZE {props.product.sizes[0]}  •  ITEM {props.product.product_id}</div>
                <div>{props.product.short_detail}</div>
                <div className='linkDiv'>
                  <a
                    // href={'/products/' + props.product.id + ''}
                    href={'/'}
                    className='seeProductDetailsLink'>
                      See product details
                  </a>
                </div>
                <div>
                  COLOR: {props.product.colors[0].name} - {props.product.colors[0].description}
                  {/* <div>
                    color boxes container
                    each color box (image) with hover animation and selection box
                    {colorBoxes}
                  </div> */}
                </div>
              </div>
            </div>
            <div className='footerModal'>
              <div>
                <div className="star-ratings-css">
                  <div className="star-ratings-css-top" style={{width: (props.product.average_rating / 5 * 100)+ '%'}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                  <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                </div>
                <span className="boldText">
                  {props.product.review_count} reviews
                </span>
                <span className='dividerText'> | </span>
                <span>
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="modalHeart"><path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path></svg>
                </span>
                <span className="boldText">
                  {props.product.loves} loves
                </span>
              </div>
              <div className='modalBuy'>
                <div className='boldText modalPrice'>{formatter.format(props.product.price)}</div>
                <div className='modalBuyButtons'>
                  <div className='relative'>
                    <select className='modalDropdown'>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='10'>10</option>
                    </select>
                    <span className="modalDropdownArrow" direction="down"></span>
                    <svg viewBox="0 0 24 24"><g><path d="M12 5.333c-.8 0-1.333.534-1.333 1.334v8c0 .8.533 1.333 1.333 1.333.8 0 1.333-.533 1.333-1.333v-8c0-.8-.533-1.334-1.333-1.334z" fill="#fff"></path></g></svg>
                  </div>
                  <div>
                    <div className='addToBasketButtonDiv'>
                      <button className='addToBasketButton'>
                        Add to Basket
                      </button>
                      <div className='addToLovesButtonDiv'>
                        <button className='addToLovesButton'>
                          <svg viewBox="0 0 24 24" className='addToLovesButtonSvg'>
                            <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z">
                            </path>
                          </svg>
                          Add to Loves
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    </QuickLookModalStyles>,
    document.getElementById('portal')
  );

};

export default QuickLookModal;