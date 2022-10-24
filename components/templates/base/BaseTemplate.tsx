import styles from './BaseTemplate.module.css';
export interface IBaseTemplate {
  sampleTextProp: string;
  textColor?: string;
  backgroundColor?: string;
}

const BaseTemplate = ({
  sampleTextProp,
  textColor,
  backgroundColor,
}: IBaseTemplate) => {
  return (
    <div
      className={styles.container}
      style={{ color: textColor, backgroundColor }}
    >
      {sampleTextProp}
    </div>
  );
};
export default BaseTemplate;
