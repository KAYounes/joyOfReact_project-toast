import React from "react";

export function useTabalize(obj) {
    if (typeof obj !== "object") return;

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        marginBottom: '20px',
        borderRadius: '6px',
        overflow: 'hidden',
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
    };

    const cellStyle = {
        padding: '12px 15px',
        textAlign: 'left',
        borderBottom: '1px solid #e3e3e3',
    };

    const headerCellStyle = {
        ...cellStyle,
        backgroundColor: '#f4f4f4',
        fontWeight: 'bold',
        color: '#333',
    };

    
    const tableDOM = Object.entries(obj).map(function (entry, index) {
        return (
            <tr key={index}>
                <th style={headerCellStyle}>{entry[0]}</th>
                <td style={cellStyle}>{entry[1]}</td>
            </tr>
        );
    });

    return (
        <table border="1" style={tableStyle}>
            <tbody>
                {tableDOM}
            </tbody>
        </table>
    );
}

/*
        <table border="1" style={tableStyle}>
            <tbody>
                <tr>
                    <th style={headerCellStyle}>Header 1</th>
                    <td style={cellStyle}>Data 1</td>
                </tr>
                <tr>
                    <th style={headerCellStyle}>Header 2</th>
                    <td style={cellStyle}>Data 2</td>
                </tr>
                <tr>
                    <th style={headerCellStyle}>Header 3</th>
                    <td style={cellStyle}>Data 3</td>
                </tr>
            </tbody>
        </table>
*/

