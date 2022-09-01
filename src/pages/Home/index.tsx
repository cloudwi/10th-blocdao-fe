import classNames from 'classnames/bind'
import React, { useMemo } from 'react'

import LogoImg from '../../assets/home/logo.svg'
import Slide01Img from '../../assets/home/slide01.jpg'
import Slide02Img from '../../assets/home/slide02.jpg'
import styles from './index.module.css'

const HomePage: React.FC = () => {
  const cx = useMemo(() => classNames.bind(styles), [])

  return (
    <>
      <div className={cx('header')}>
        <div className={cx('logo_section')}>
          <img src={LogoImg} />
        </div>
        <div className={cx('page_title')}>블록다오</div>
        <div className={cx('main_menu')}>
          <ul>
            <li>새 글쓰기</li>
            <li>메이트모집</li>
            <li className={cx('login_menu')}>로그인/회원가입</li>
          </ul>
        </div>
      </div>
      <div className={cx('section')}>
        <input type="radio" name="slide" id="slide01" checked />
        <input type="radio" name="slide" id="slide02" />
        <input type="radio" name="slide" id="slide03" />
        <div className={cx('slidewrap')}>
          <ul className={cx('slidelist')}>
            <li>
              <a>
                <label htmlFor="slide02" className={cx('left')}></label>
                <img src={Slide01Img} />
                <label htmlFor="slide02" className={cx('right')}></label>
              </a>
            </li>
            <li>
              <a>
                <label htmlFor="slide01" className={cx('left')}></label>
                <img src={Slide02Img} />
                <label htmlFor="slide01" className={cx('right')}></label>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx('container mt-5 mb-3')}>
        <div className={cx('row')}>
          <div className={cx('col-md-4')}>
            <div className={cx('card p-3 mb-2')}>
              <div className={cx('d-flex justify-content-between')}>
                <div className={cx('d-flex flex-row align-items-center')}>
                  <div className={cx('ms-2 c-details')}>
                    <h6 className={cx('mb-0')}>조정무님</h6> <span>1일전</span>
                  </div>
                </div>
                <div className={cx('badge')}>
                  {' '}
                  <span>React</span>{' '}
                </div>
              </div>
              <div className={cx('mt-5')}>
                <h3 className={cx('heading')}>
                  [사이드프로젝트] <br />
                  동물 NFT 서비 스 - 프론트, 백엔드 개발자 모집
                </h3>
                <div className={cx('mt-5')}>
                  <div className={cx('progress')}>
                    <div
                      className={cx('progress-bar')}
                      role="progressbar"
                      style={{ width: '30%' }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}></div>
                  </div>
                  <div className={cx('mt-3')}>
                    {' '}
                    <span className={cx('text1')}>
                      시작예정일 : <span className={cx('text2')}>2022.08.29</span>
                    </span>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('col-md-4')}>
            <div className={cx('card p-3 mb-2')}>
              <div className={cx('d-flex justify-content-between')}>
                <div className={cx('d-flex flex-row align-items-center')}>
                  <div className={cx('ms-2 c-details')}>
                    <h6 className={cx('mb-0')}>Dribbble</h6> <span>4 days ago</span>
                  </div>
                </div>
                <div className={cx('badge')}>
                  {' '}
                  <span>Product</span>{' '}
                </div>
              </div>
              <div className={cx('mt-5')}>
                <h3 className={cx('heading')}>
                  Junior Product
                  <br />
                  Designer-Singapore
                </h3>
                <div className={cx('mt-5')}>
                  <div className={cx('progress')}>
                    <div
                      className={cx('progress-bar')}
                      role="progressbar"
                      style={{ width: '50%' }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}></div>
                  </div>
                  <div className={cx('mt-3')}>
                    {' '}
                    <span className={cx('text1')}>
                      42 Applied <span className={cx('text2')}>of 70 capacity</span>
                    </span>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('col-md-4')}>
            <div className={cx('card p-3 mb-2')}>
              <div className={cx('d-flex justify-content-between')}>
                <div className={cx('d-flex flex-row align-items-center')}>
                  <div className={cx('ms-2 c-details')}>
                    <h6 className={cx('mb-0')}>Reddit</h6> <span>2 days ago</span>
                  </div>
                </div>
                <div className={cx('badge')}>
                  {' '}
                  <span>Design</span>{' '}
                </div>
              </div>
              <div className={cx('mt-5')}>
                <h3 className={cx('heading')}>
                  Software Architect <br />
                  Java - USA
                </h3>
                <div className={cx('mt-5')}>
                  <div className={cx('progress')}>
                    <div
                      className={cx('progress-bar')}
                      role="progressbar"
                      style={{ width: '70%' }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}></div>
                  </div>
                  <div className={cx('mt-3')}>
                    {' '}
                    <span className={cx('text1')}>
                      52 Applied <span className={cx('text2')}>of 100 capacity</span>
                    </span>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('container mt-5 mb-3')}>
        <div className={cx('row')}>
          <div className={cx('col-md-4')}>
            <div className={cx('card p-3 mb-2')}>
              <div className={cx('d-flex justify-content-between')}>
                <div className={cx('d-flex flex-row align-items-center')}>
                  <div className={cx('ms-2 c-details')}>
                    <h6 className={cx('mb-0')}>조정무님</h6> <span>1일전</span>
                  </div>
                </div>
                <div className={cx('badge')}>
                  {' '}
                  <span>React</span>{' '}
                </div>
              </div>
              <div className={cx('mt-5')}>
                <h3 className={cx('heading')}>
                  [사이드프로젝트] <br />
                  동물 NFT 서비스 - 프론트, 백엔드 개발자 모집
                </h3>
                <div className={cx('mt-5')}>
                  <div className={cx('progress')}>
                    <div
                      className={cx('progress-bar')}
                      role="progressbar"
                      style={{ width: '30%' }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}></div>
                  </div>
                  <div className={cx('mt-3')}>
                    {' '}
                    <span className={cx('text1')}>
                      시작예정일 : <span className={cx('text2')}>2022.08.29</span>
                    </span>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('col-md-4')}>
            <div className={cx('card p-3 mb-2')}>
              <div className={cx('d-flex justify-content-between')}>
                <div className={cx('d-flex flex-row align-items-center')}>
                  <div className={cx('ms-2 c-details')}>
                    <h6 className={cx('mb-0')}>Dribbble</h6> <span>4 days ago</span>
                  </div>
                </div>
                <div className={cx('badge')}>
                  {' '}
                  <span>Product</span>{' '}
                </div>
              </div>
              <div className={cx('mt-5')}>
                <h3 className={cx('heading')}>
                  Junior Product
                  <br />
                  Designer-Singapore
                </h3>
                <div className={cx('mt-5')}>
                  <div className={cx('progress')}>
                    <div
                      className={cx('progress-bar')}
                      role="progressbar"
                      style={{ width: '50%' }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}></div>
                  </div>
                  <div className={cx('mt-3')}>
                    {' '}
                    <span className={cx('text1')}>
                      42 Applied <span className={cx('text2')}>of 70 capacity</span>
                    </span>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('col-md-4')}>
            <div className={cx('card p-3 mb-2')}>
              <div className={cx('d-flex justify-content-between')}>
                <div className={cx('d-flex flex-row align-items-center')}>
                  <div className={cx('ms-2 c-details')}>
                    <h6 className={cx('mb-0')}>Reddit</h6> <span>2 days ago</span>
                  </div>
                </div>
                <div className={cx('badge')}>
                  {' '}
                  <span>Design</span>{' '}
                </div>
              </div>
              <div className={cx('mt-5')}>
                <h3 className={cx('heading')}>
                  Software Architect <br />
                  Java - USA
                </h3>
                <div className={cx('mt-5')}>
                  <div className={cx('progress')}>
                    <div
                      className={cx('progress-bar')}
                      role="progressbar"
                      style={{ width: '70%' }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}></div>
                  </div>
                  <div className={cx('mt-3')}>
                    {' '}
                    <span className={cx('text1')}>
                      52 Applied <span className={cx('text2')}>of 100 capacity</span>
                    </span>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('container mt-5 mb-3')}>
        <div className={cx('row')}>
          <div className={cx('col-md-4')}>
            <div className={cx('card p-3 mb-2')}>
              <div className={cx('d-flex justify-content-between')}>
                <div className={cx('d-flex flex-row align-items-center')}>
                  <div className={cx('ms-2 c-details')}>
                    <h6 className={cx('mb-0')}>조정무님</h6> <span>1일전</span>
                  </div>
                </div>
                <div className={cx('badge')}>
                  {' '}
                  <span>React</span>{' '}
                </div>
              </div>
              <div className={cx('mt-5')}>
                <h3 className={cx('heading')}>
                  [사이드프로젝트] <br />
                  동물 NFT 서비 스 - 프론트, 백엔드 개발자 모집
                </h3>
                <div className={cx('mt-5')}>
                  <div className={cx('progress')}>
                    <div
                      className={cx('progress-bar')}
                      role="progressbar"
                      style={{ width: '30%' }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}></div>
                  </div>
                  <div className={cx('mt-3')}>
                    {' '}
                    <span className={cx('text1')}>
                      시작예정일 : <span className={cx('text2')}>2022.08.29</span>
                    </span>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('col-md-4')}>
            <div className={cx('card p-3 mb-2')}>
              <div className={cx('d-flex justify-content-between')}>
                <div className={cx('d-flex flex-row align-items-center')}>
                  <div className={cx('ms-2 c-details')}>
                    <h6 className={cx('mb-0')}>Dribbble</h6> <span>4 days ago</span>
                  </div>
                </div>
                <div className={cx('badge')}>
                  {' '}
                  <span>Product</span>{' '}
                </div>
              </div>
              <div className={cx('mt-5')}>
                <h3 className={cx('heading')}>
                  Junior Product
                  <br />
                  Designer-Singapore
                </h3>
                <div className={cx('mt-5')}>
                  <div className={cx('progress')}>
                    <div
                      className={cx('progress-bar')}
                      role="progressbar"
                      style={{ width: '50%' }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}></div>
                  </div>
                  <div className={cx('mt-3')}>
                    {' '}
                    <span className={cx('text1')}>
                      42 Applied <span className={cx('text2')}>of 70 capacity</span>
                    </span>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('col-md-4')}>
            <div className={cx('card p-3 mb-2')}>
              <div className={cx('d-flex justify-content-between')}>
                <div className={cx('d-flex flex-row align-items-center')}>
                  <div className={cx('ms-2 c-details')}>
                    <h6 className={cx('mb-0')}>Reddit</h6> <span>2 days ago</span>
                  </div>
                </div>
                <div className={cx('badge')}>
                  {' '}
                  <span>Design</span>{' '}
                </div>
              </div>
              <div className={cx('mt-5')}>
                <h3 className={cx('heading')}>
                  Software Architect <br />
                  Java - USA
                </h3>
                <div className={cx('mt-5')}>
                  <div className={cx('progress')}>
                    <div
                      className={cx('progress-bar')}
                      role="progressbar"
                      style={{ width: '70%' }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}></div>
                  </div>
                  <div className={cx('mt-3')}>
                    {' '}
                    <span className={cx('text1')}>
                      52 Applied <span className={cx('text2')}>of 100 capacity</span>
                    </span>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
