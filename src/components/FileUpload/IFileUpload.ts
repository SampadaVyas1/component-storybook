import { ReactNode } from 'react';

type InputProps = JSX.IntrinsicElements['input'];

export enum FILE_STATUS {
  ERROR = 'error',
  IN_PROGRESS = 'inProgress',
  COMPLETED = 'completed'
}

export interface IUploadFile {
  id: string;
  file: File;
  status?: FILE_STATUS;
  progressValue?: number;
}

export type renderFileType = (
  id: string,
  status: string,
  file: File,
  progressValue: number
) => ReactNode;

export interface IFileUpload extends InputProps {
  filesToUpload: IUploadFile[];
  uploadIcon?: ReactNode;
  uploadText?: ReactNode;
  ProgressStartIcon?: React.FC<JSX.IntrinsicElements['svg']>;
  ProgressEndIcon?: React.FC<JSX.IntrinsicElements['svg']>;
  handleFileUpload?: (files: FileList | File[]) => void;
  afterUploadEndIcon?: ReactNode;
  upload?: boolean;
  preUploadedFiles?: IUploadFile[];
  renderUploadedFile?: renderFileType;
  renderPreUploadedFile?: renderFileType;
}
