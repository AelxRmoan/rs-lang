import css from './devCard.css';

interface devCard {
  selector: string;
  avaSrc: string;
  devName: string;
  position: string;
  positionInfo: string;
  itsContribution: string;
  imgPos?: 'start' | 'end';
  link?: string;
}

export const DevCard = ({
  selector,
  avaSrc,
  devName,
  position,
  positionInfo,
  itsContribution,
  imgPos = 'start',
  link,
}: devCard): JSX.Element => {
  return (
    <li className={`${css.card__Container} ${selector}`}>
      {imgPos === 'start' && (
        <div
          className={css.img}
          style={{
            background: `url(${avaSrc}) no-repeat center`,
            backgroundSize: 'cover',
          }}
        />
      )}
      <div className={`${css.rightFlex}`}>
        <div className={css.nameFlex}>
          <h3 className={css.h3}>{devName}</h3>
          <a href={link} target="_blank">
            <svg
              className={css.svg}
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"
                  data-original="#212121"
                />
              </g>
            </svg>
          </a>
        </div>
        <span className={css.span}>{position}</span>
        <p className={css.p}>{positionInfo}</p>
        <span className={css.span}>Responsible for</span>
        <p className={css.p}>{itsContribution}</p>
      </div>
      {imgPos === 'end' && (
        <div
          className={css.img}
          style={{
            background: `url(${avaSrc}) no-repeat center`,
            backgroundSize: 'cover',
          }}
        />
      )}
    </li>
  );
};
