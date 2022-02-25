import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import './filter.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Filter() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{padding:0}}
                >
                    <Typography className='fontstyle'>
                        FILTER 01
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{padding:0}}>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 01</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 02</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 03</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 04</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 05</span><span className='subfont_after'>(8000)</span>
                    </Typography>

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    sx={{padding:0}}
                >
                    <Typography className='fontstyle'>
                        FILTER 02
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{padding:0}}>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 01</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 02</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 03</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 04</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 05</span><span className='subfont_after'>(8000)</span>
                    </Typography>

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    sx={{padding:0}}
                >
                    <Typography className='fontstyle'>
                        FILTER 03
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{padding:0}}>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 01</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 02</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 03</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 04</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 05</span><span className='subfont_after'>(8000)</span>
                    </Typography>

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    sx={{padding:0}}
                >
                    <Typography className='fontstyle'>
                        FILTER 04
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{padding:0}}>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 01</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 02</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 03</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 04</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 05</span><span className='subfont_after'>(8000)</span>
                    </Typography>

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    sx={{padding:0}}
                >
                    <Typography className='fontstyle'>
                        FILTER 05
                    </Typography>
                </AccordionSummary >
                <AccordionDetails sx={{padding:0}}>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 01</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 02</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 03</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 04</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 05</span><span className='subfont_after'>(8000)</span>
                    </Typography>

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                    sx={{padding:0}}
                >
                    <Typography className='fontstyle'>
                        FILTER 06
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{padding:0}}>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 01</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 02</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 03</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 04</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 05</span><span className='subfont_after'>(8000)</span>
                    </Typography>

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7bh-content"
                    id="panel7bh-header"
                    sx={{padding:0}}
                >
                    <Typography className='fontstyle'>
                        FILTER 07
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{padding:0}}>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 01</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 02</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 03</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 04</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 05</span><span className='subfont_after'>(8000)</span>
                    </Typography>

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8bh-content"
                    id="panel8bh-header"
                    sx={{padding:0}}
                >
                    <Typography className='fontstyle'>
                        FILTER 08
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{padding:0}}>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 01</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 02</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 03</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 04</span><span className='subfont_after'>(8000)</span>
                    </Typography>
                    <Typography>
                        <Checkbox {...label} size="small" /><span className='subfont'>SUB FILTER 05</span><span className='subfont_after'>(8000)</span>
                    </Typography>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}
