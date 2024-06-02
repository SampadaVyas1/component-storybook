import { Meta, StoryFn } from '@storybook/react';
import FileUpload from './FileUpload';
import CloudArrowIcon from '../../icons/CloudArrowIcon';
import { SVG_COLOR_GRASS, SVG_COLOR_NAVY } from '../../utils/svg/constant';
import DeleteIcon from '../../icons/DeleteIcon';
import { FILE_STATUS } from './IFileUpload';
import styles from './FileUpload.module.scss';

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
  argTypes: {}
} as Meta<typeof FileUpload>;

export const Default: StoryFn<typeof FileUpload> = (args) => <FileUpload {...args} />;
Default.args = {
  disabled: false,
  upload: false,
  uploadIcon: <CloudArrowIcon color={SVG_COLOR_NAVY} />,
  uploadText: (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <span>Click to upload the files or drag and drop</span>
      <span>SVG, PNG, JPG or GIF (max. 800x400px)</span>
    </div>
  ),
  ProgressStartIcon: CloudArrowIcon,
  ProgressEndIcon: DeleteIcon,
  afterUploadEndIcon: <DeleteIcon color="red" />,
  filesToUpload: [
    {
      id: '45347328',
      file: new File(['Some content Here'], 'file.txt'),
      progressValue: 50,
      status: FILE_STATUS.IN_PROGRESS
    },
    {
      id: '45347329',
      file: new File(['Some content'], 'React.pdf'),
      progressValue: 50,
      status: FILE_STATUS.ERROR
    },
    {
      id: '45347330',
      file: new File(['Some content'], 'JavaScript.doc'),
      progressValue: 50,
      status: FILE_STATUS.COMPLETED
    }
  ]
};

export const withPreUploadedFiles: StoryFn<typeof FileUpload> = (args) => <FileUpload {...args} />;
withPreUploadedFiles.args = {
  disabled: false,
  upload: false,
  uploadIcon: <CloudArrowIcon color={SVG_COLOR_NAVY} />,
  uploadText: (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <span>Click to upload the files or drag and drop</span>
      <span>SVG, PNG, JPG or GIF (max. 800x400px)</span>
    </div>
  ),
  ProgressStartIcon: CloudArrowIcon,
  ProgressEndIcon: DeleteIcon,
  afterUploadEndIcon: <DeleteIcon color="red" />,
  filesToUpload: [
    {
      id: '45347328',
      file: new File(['Some content Here'], 'file.txt'),
      progressValue: 50,
      status: FILE_STATUS.IN_PROGRESS
    },
    {
      id: '45347329',
      file: new File(['Some content'], 'React.pdf'),
      progressValue: 50,
      status: FILE_STATUS.ERROR
    },
    {
      id: '45347330',
      file: new File(['Some content'], 'JavaScript.doc'),
      progressValue: 50,
      status: FILE_STATUS.COMPLETED
    }
  ],
  preUploadedFiles: [
    {
      id: '45347328',
      file: new File(['Some content Here'], 'file.txt')
    },
    {
      id: '45347329',
      file: new File(['Some content'], 'React.pdf')
    },
    {
      id: '45347330',
      file: new File(['Some content'], 'JavaScript.doc')
    }
  ]
};

export const CustomStyling: StoryFn<typeof FileUpload> = (args) => <FileUpload {...args} />;
const defaultArgs = Default.args;
CustomStyling.args = {
  ...defaultArgs,
  className: styles.customFileUpload,
  uploadIcon: <CloudArrowIcon color={SVG_COLOR_GRASS} />
};
