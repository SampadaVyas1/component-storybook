import { IBadge } from './IBadge';
import styles from './Badge.module.scss';
import { Typography } from '../Typography/Typography';

const Badge: React.FC<IBadge> = ({
  color = 'black',
  typographyProps,
  badgeContent,
  style,
  className,
  ...rest
}) => {
  return (
    <div
      className={[
        badgeContent ? styles.badgeWithContent : styles.badgeWithoutContent,
        className
      ].join(' ')}
      {...rest}
      style={{ backgroundColor: color, ...style }}
    >
      {badgeContent && <Typography {...typographyProps}>{badgeContent}</Typography>}
    </div>
  );
};

export default Badge;
