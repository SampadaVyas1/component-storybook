import React, { useRef, useState, DragEvent } from 'react';
import { FILE_STATUS, IUploadFile, IFileUpload } from './IFileUpload';
import styles from './FileUpload.module.scss';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import FileArrowUpIcon from '../../icons/FileArrowUpIcon';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import DocumentIcon from '../../icons/DocumentIcon';
import DeleteIcon from '../../icons/DeleteIcon';
import { SVG_COLOR_GREY, SVG_COLOR_NAVY, SVG_ERROR } from '../../utils/svg/constant';
import CheckFilledIcon from '../../icons/CheckFilledIcon';

const FileUpload: React.FC<IFileUpload> = ({
  filesToUpload,
  upload = false,
  uploadIcon,
  uploadText,
  disabled,
  ProgressStartIcon = DocumentIcon,
  ProgressEndIcon = DeleteIcon,
  handleFileUpload,
  afterUploadEndIcon,
  preUploadedFiles,
  className,
  renderUploadedFile,
  renderPreUploadedFile,
  ...rest
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const [isFileSelected, setIsFileSelected] = useState(false);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    if (dragging) {
      setDragging(false);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    setIsFileSelected(true);
    const data = event.dataTransfer;
    const files: File[] = [];

    if (data.items) {
      for (let index = 0; index < data.items.length; index++) {
        if (data.items[index].kind === 'file') {
          const file = data.items[index].getAsFile();
          if (file) {
            files.push(file);
          }
        }
      }
    } else {
      files.push(...data.files);
    }
    handleFileUpload?.(files);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFileSelected(true);
    const target = event.currentTarget as HTMLInputElement;
    const files = target?.files;
    if (files) {
      handleFileUpload?.(files);
    }
  };

  const handleContainerClick = (event) => {
    fileInputRef?.current?.click();
    // NOTE: Need HTMLInputElement was not setting the value as null
    (event.target as any).value = null;
  };

  return (
    <>
      <section
        className={[
          styles.fileUploadContainer,
          disabled ? styles.disabledContainer : '',
          className
        ].join(' ')}
        onClick={handleContainerClick}
        role="button"
        tabIndex={0}
        onKeyDown={() => handleContainerClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className={[styles.iconWrapper, disabled ? styles.iconWrapperDisabled : ''].join(' ')}>
          {uploadIcon}
        </div>
        <input ref={fileInputRef} type="file" onChange={handleFileChange} hidden {...rest} />
        {uploadText}
      </section>

      {isFileSelected &&
        filesToUpload?.map(({ id, status, file, progressValue }: IUploadFile) => {
          return renderUploadedFile ? (
            renderUploadedFile(id, status ?? FILE_STATUS.IN_PROGRESS, file, progressValue ?? 0)
          ) : status === FILE_STATUS.COMPLETED ? (
            <section key={`file-${id}`} className={styles.postUploadSection}>
              <FileArrowUpIcon />
              <a href={file?.name} className={styles.fileLink}>
                <Typography variant="b4-medium">{file?.name}</Typography>
              </a>
              {afterUploadEndIcon}
            </section>
          ) : (
            <section
              key={`file-${id}`}
              className={[
                styles.progressContainer,
                status === FILE_STATUS.ERROR ? styles.errorProgressContainer : ''
              ].join(' ')}
            >
              <div
                className={[
                  styles.startIcon,
                  status === FILE_STATUS.ERROR ? styles.startIconWithError : ''
                ].join(' ')}
              >
                <ProgressStartIcon
                  color={status === FILE_STATUS.ERROR ? SVG_ERROR : SVG_COLOR_NAVY}
                />
              </div>
              {status === FILE_STATUS.ERROR ? (
                <div className={styles.errorFileInfo}>
                  <Typography className={styles.title} variant={'b3-medium'}>
                    Upload failed, please try again
                  </Typography>
                  <Typography className={styles.subTitle} variant={'b3-regular'}>
                    {file?.name}
                  </Typography>
                  <Button variant={'Tertiary'} disabled={false} className={styles.tryAgainButton}>
                    <Typography variant={'b3-bold'}>Try again</Typography>
                  </Button>
                </div>
              ) : (
                <div className={styles.defaultFileInfo}>
                  <Typography variant={'b3-regular'}>{file?.name}</Typography>
                  <Typography className={styles.subTitle} variant={'b3-regular'}>
                    {file?.size}
                  </Typography>
                  {upload && (
                    <ProgressIndicator
                      progress={progressValue ?? 0}
                      hideTooltip={true}
                      textPlacement="Right"
                    />
                  )}
                </div>
              )}
              {progressValue === 100 ? (
                <CheckFilledIcon />
              ) : (
                <ProgressEndIcon
                  color={status === FILE_STATUS.ERROR ? SVG_ERROR : SVG_COLOR_GREY}
                />
              )}
            </section>
          );
        })}

      {preUploadedFiles &&
        !isFileSelected &&
        preUploadedFiles?.map(({ id, file, progressValue }: IUploadFile) => {
          return renderPreUploadedFile ? (
            renderPreUploadedFile(id, status, file, progressValue ?? 100)
          ) : (
            <section key={`file-${id}`} className={styles.progressContainer}>
              <div className={styles.startIcon}>
                <ProgressStartIcon color={SVG_COLOR_NAVY} />
              </div>
              <div className={styles.defaultFileInfo} key={`file-${id}`}>
                <Typography variant={'b3-regular'}>{file?.name}</Typography>
                <Typography className={styles.subTitle} variant={'b3-regular'}>
                  {file?.size}
                </Typography>
              </div>
            </section>
          );
        })}
    </>
  );
};

export default FileUpload;
