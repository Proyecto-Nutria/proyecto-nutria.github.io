import UIMainContainer from 'components/UI/UIBoxContainer';
import React, { useEffect, useState } from 'react';
import { InterviewerPoolsProps } from 'utils/ts/propsInterfaces';
import IntervieweeAvailability from 'components/Interviewer/Pool/IntervieweeAvailability';
import { GoCalendar } from 'react-icons/go';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import DateTime from 'utils/helpers/DateTime';
import Modal from '@material-ui/core/Modal';

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const InterviewerPool: React.FC<InterviewerPoolsProps> = ({
  copy,
  poolsData,
  pool,
  poolSet,
  poolUpdateReducer,
  createInterviewMutation,
  isLoading,
  isError,
}) => {  
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  const [failSnackBarOpen, setFailSnackBarOpen] = useState(false);


  const [showPoolAvailability, setPoolAvailability] = useState(false);
  const [selectedPoolCandidate, setPoolCandidate] = useState(null);
  const [selectedDateOfInterview, setDateOfInterview] = useState("");
  const [selectedCandidateUid, setSelectedCandidateUid] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  /**
   * Triggers the event to show the availability calendar for the given candidate
   * @param poolCandidate The selected candidate
   */
   function showAvailabilityForCandidate(poolCandidate: any) {
    setOpen(true);
    setPoolAvailability(true);
    setPoolCandidate(poolCandidate);
    setDateOfInterview("");
    setSelectedCandidateUid(poolCandidate.uid);
  }

  function setSelectedDateOfInterview(date: string) {
    date = DateTime.momentumDateToPool(DateTime.createMomentumDateFromStr(date));
    setDateOfInterview(date);
  }

  const styleModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflowY: "auto" as "auto",
    maxHeight: '90%'
  };
  

  useEffect(() => {
    if (isError) {
      setFailSnackBarOpen(true);
    } else {
      setFailSnackBarOpen(false);
    }
  }, [isError]);
  return (
    <UIMainContainer>
      <Snackbar open={isLoading}>
        <Alert severity="info">Loading...</Alert>
      </Snackbar>
      <Snackbar
        open={successSnackBarOpen}
        autoHideDuration={6000}
        onClose={() => setSuccessSnackBarOpen(false)}
      >
        <Alert severity="success">
          You have succesfully scheduled an interview, remember to arrive on
          time :D
        </Alert>
      </Snackbar>
      <Snackbar
        open={failSnackBarOpen}
        autoHideDuration={6000}
        onClose={() => setFailSnackBarOpen(false)}
      >
        <Alert severity="error">
          An Error occurred, please try again later
        </Alert>
      </Snackbar>
      <Typography variant="h4">{copy.header}</Typography>
      <br />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">
                {copy.table.head.languagesHead}
              </TableCell>
              <TableCell align="center">
                {copy.table.head.awaitingHead}
              </TableCell>
              <TableCell align="center">{copy.table.head.roleHead}</TableCell>
              <TableCell align="center">
                {copy.table.head.companyHead}
              </TableCell>
              <TableCell align="center">
                {copy.table.head.availabilityHead}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {poolsData.map((poolCandidate, id) => (
              <TableRow key={id}>
                <TableCell align="center">{poolCandidate.name}</TableCell>
                <TableCell align="center">{poolCandidate.languages}</TableCell>
                <TableCell align="center">
                  {poolCandidate.scheduled} / {poolCandidate.awaiting}
                </TableCell>
                <TableCell align="center">{poolCandidate.role}</TableCell>
                <TableCell align="center">{poolCandidate.company}</TableCell>
                <TableCell align="center">
                  <button onClick={() => showAvailabilityForCandidate(poolCandidate)}>
                    <GoCalendar />
                  </button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    color="secondary"
                    target="_blank"
                    href={poolCandidate.folder}
                  >
                    Resume
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={selectedDateOfInterview === "" || poolCandidate.uid.toString() !== selectedCandidateUid.toString()}
                    onClick={() => {
                      createInterviewMutation(
                        poolCandidate.uid,
                        poolCandidate.awaiting,
                        poolCandidate.intervieweeId.toString(),
                        selectedDateOfInterview,
                        () => {
                          setSuccessSnackBarOpen(true);
                        },
                        () => {}
                      );
                    }}
                  >
                    Schedule
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={styleModal}>
          {showPoolAvailability ? 
          <IntervieweeAvailability 
          poolCandidate={selectedPoolCandidate}
          setSelectedDateOfInterview={setSelectedDateOfInterview}/> : null}
        </div>
      </Modal>
    </UIMainContainer>
  );
};

export default InterviewerPool;
